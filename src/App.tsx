import React, {useEffect} from 'react';
import './App.css';

import {
    Routes,
    Route,
    useLocation, Navigate,
} from "react-router-dom";
import {Layout} from "./routes/Layout";
import {StartPage} from "./routes/StartPage";
import {LoginPage} from "./routes/LoginPage";
import {RequireAuth} from "./routes/RequireAuth";
import {QuestionPage} from "./routes/QuestionPage";
import {AboutPage} from "./routes/AboutPage";
import {HowToPage} from "./routes/HowToPage";
import {RankingPage} from "./routes/RankingPage";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";
import translations from "./translations";
import constants from "./data/constants";
import {useUser} from "./stores/userStore";

function App() {
    // Translation hook
    const {t, i18n} = useTranslation();
    const getPlayerInfo = useUser(state => state.getPlayerInfo);
    // React Router location hook
    const loc = useLocation();
    useEffect(() => {
        // parse language code from url. ex: test.com/tr/home -> result: tr
        const lang = loc.pathname.split(/\/([a-z]{2})(?![^\/])/gm)[1];
        // check lang index
        const i = Object.keys(translations).findIndex(f => f === lang);
        // if language different than known language
        if( i !== -1 && i18n.language !== lang) {
            // change language
            i18n.changeLanguage(lang);
        }
    }, [loc, i18n]);

    useEffect(() => {
        getPlayerInfo();
    }, []);

    const routes = () => {
        return(
            <Route element={<Layout />}>
                <Route index element={<Navigate to={`/${i18n.language}/home`} />} />
                <Route path="home" element={<StartPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="howto" element={<HowToPage />} />
                <Route path="ranking" element={<RankingPage />} />
                <Route
                    path="quiz"
                    element={
                        <RequireAuth>
                            <QuestionPage />
                        </RequireAuth>
                    }
                />
            </Route>
        )
    }

    function renderRoutes(){
        return Object.keys(translations).map((lang_code: string, id) => {
            return (
                <>
                    {/* Generate url by language. Ex: test.com/en, test.com/en */}
                    <Route key={id} path={lang_code}>
                        {routes()}
                    </Route>
                </>
            );
        })
    }


  return (
    <div className="App">
        <Helmet>
            <title>{t('about_text_2').toString()}</title>
            <meta name="description" content={t('welcome_text').toString()}/>
            <meta property="og:title" content={t('about_text_2').toString()} />
            <meta property="og:url" content={t('site_url').toString()} />
            <meta property="og:image" content={constants.BASE_URL + t('metaImage').toString()} />
            <meta property="og:description" content={t('welcome_text').toString()} />
            <meta name="twitter:title" content={t('about_text_2').toString()} />
            <meta name="twitter:description" content={t('welcome_text').toString()}/>
            <meta name="twitter:image" content={constants.BASE_URL + t('metaImage').toString()}/>
            <meta name="twitter:card" content="summary_large_image"/>
        </Helmet>
      <Routes>
          {/* If the user visits test.com, redirect them to the appropriate page for their language. For example test.com -> test.com/en */}
          <Route key={'index_route'} path={"/"} element={<Navigate to={`${i18n.language}`} replace />} />
          {renderRoutes()}
      </Routes>
    </div>
  );
}

export default App;
