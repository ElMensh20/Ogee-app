
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { TRANSLATIONS_AR } from "./ar/translations";
import { TRANSLATIONS_EN } from "./en/translations";
 
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
resources: {
    en: {
        translation: TRANSLATIONS_EN
    },
    ar: {
        translation: TRANSLATIONS_AR
    }
}
});
i18n.changeLanguage("ar");