import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import src/Translations/index.ts
import languages from "../translations";

// Let's add the languages that will be included in our application and get their translations from the languages variable.
const resources = {
    en: {
        translation: languages.en
    },
    sr: {
        translation: languages.sr
    },
    hr: {
        translation: languages.hr
    },
    pl: {
        translation: languages.pl
    },
    ro: {
        translation: languages.ro
    },
};

// Let's get the user's language
const getLanguage = () => {
    let parsed = navigator.language
    if (parsed.includes("-")) {
        parsed = parsed.split("-")[0]
    }
    console.log('language', parsed);
    localStorage.setItem("language", parsed)
    return parsed
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getLanguage(),
        interpolation: {
            escapeValue: false
        },
        saveMissing: true,
        parseMissingKeyHandler: (key) => {
            return `missing translation "${key}"`;
        },
        react: {
            transWrapTextNodes: 'span'
        }
    });
export default i18n;
