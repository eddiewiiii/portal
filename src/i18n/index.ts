import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh from "./zh.json";
import en from "./en.json";
import { useLanguageStore } from "@/store/useLanguageStore";

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
  },
  lng: useLanguageStore.getState().lang,
  fallbackLng: "zh",
  interpolation: { escapeValue: false },
});

useLanguageStore.subscribe((s) => {
  if (s.lang !== i18n.language) {
    i18n.changeLanguage(s.lang);
  }
});

export default i18n;
