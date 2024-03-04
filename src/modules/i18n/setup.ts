import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from "./locales/fr.json";
import en from "./locales/en.json";

const ns = ['common'];
const supportedLngs = ['en', 'fr'];
const resources = {
    en:{common: en},
    fr:{common: fr},
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        //debug: true,
        lng: 'en',
        fallbackLng: 'en',
        defaultNS: 'common',
        ns,
        interpolation: {escapeValue: false},
        react: {useSuspense: false},
        supportedLngs,
        resources,
    });

export default i18n;