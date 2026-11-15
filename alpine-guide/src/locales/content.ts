import en from './en';
import it from './it';
export type Language = 'en' | 'it';
export type Localized = { en: string; it: string };
export const copy = { en, it };
