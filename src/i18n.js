import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 1. Import the JSON files as raw strings using the "?raw" suffix
import translationsEnString from './i18n/en.json?raw';
import translationsKrString from './i18n/kr.json?raw';

// 2. Parse the text strings into JavaScript objects
const translationsEn = JSON.parse(translationsEnString);
const translationsKr = JSON.parse(translationsKrString);

const resources = {
  en: {
    // 3. Now we can safely access the .translation key
    translation: translationsEn.translation
  },
  kr: {
    translation: translationsKr.translation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;