import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (cb) => cb("en"),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: require("../../assets/lang/en.json"),
      },
      ar: {
        translation: require("../../assets/lang/ar.json"),
      },
    },
  });

//   Create the json files of languages

// Usage
// import { useTranslation } from "react-i18next";
// const { t } = useTranslation();
// t('json objects')