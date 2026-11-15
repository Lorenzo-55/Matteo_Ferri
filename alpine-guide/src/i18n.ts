import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { copy } from './locales/content';

let language = 'en';
try {
  language = localStorage.getItem('alpine-language') === 'it' ? 'it' : 'en';
} catch {
  /* storage optional */
}
void i18n.use(initReactI18next).init({
  resources: { en: { translation: copy.en }, it: { translation: copy.it } },
  lng: language,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
