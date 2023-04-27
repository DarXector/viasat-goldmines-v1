import {useRanking} from "../stores/rankingStore";
import {useEffect} from "react";
import {InnerPage} from "./InnerPage";
import {Spinner} from "reactstrap";

import './RankingPage.css';
import {RankItem} from "../components/RankItem";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga4";
import {useUser} from "../stores/userStore";
export function RankingPage() {
    const ranking = useRanking(state => state.ranking);
    const userRanking = useRanking(state => state.userRanking);
    const loading = useRanking(state => state.loading);
    const getRanking = useRanking(state => state.getRanking);
    const {t, i18n} = useTranslation();
    const location = useLocation();
    const getPlayerInfo = useUser(state => state.getPlayerInfo);

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search + location.hash });
    }, [location]);

    useEffect(() => {
        getPlayerInfo();
        getRanking();
    }, []);

    return (
        <InnerPage title={t('ranking')}>
            <div className='page ranking-page'>
                {loading ? <Spinner color='light' /> :
                <div className='list scrollable'>
                    { ranking.map((item, index) => <RankItem key={item.name} user={item} rank={index + 1} />) }
                </div>}

                {userRanking ? <div className='fixed-rank d-flex flex-column align-items-center'>
                    <RankItem user={userRanking} isCurrentUser={true} />
                </div> : ''}
            </div>
        </InnerPage>
    );
}
