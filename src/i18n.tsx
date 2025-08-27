import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../public/locales/en/translation.json";
import translationFR from "../public/locales/fr/translation.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
};

export default i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "fr",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});
