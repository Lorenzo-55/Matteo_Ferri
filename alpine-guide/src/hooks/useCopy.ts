import { useTranslation } from 'react-i18next';
import type { Localized, Language } from '../locales/content';

export default function useCopy() {
  const { t, i18n } = useTranslation();
  const lang: Language = i18n.language === 'it' ? 'it' : 'en';
  return { t, lang, localize: (v: Localized) => v[lang] };
}
