import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ELanguage } from './lib/enums';
import { TRANSLATIONS } from './lib/translations';

const resources = TRANSLATIONS;

i18n.use(initReactI18next).init({
  resources,
  lng: ELanguage.EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
