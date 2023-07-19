/* eslint-disable camelcase */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEsEn from "./locations/es-en/translationEsEn";
import translationEsCh from "./locations/es-ch/translationEsCh";

const resources = {
  en: translationEsEn,
  ch: translationEsCh,
};
const defaultLenguage = "es";

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("selectedLanguage") || defaultLenguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
