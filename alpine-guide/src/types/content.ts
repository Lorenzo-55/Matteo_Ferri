import type { Localized } from '../locales/content';
export type Category = 'hiking' | 'climbing' | 'trek' | 'ferrata';
export type Difficulty = 'easy' | 'moderate' | 'challenging' | 'advanced';
export interface Adventure {
  slug: string;
  title: string;
  category: Category;
  region: string;
  difficulty: Difficulty;
  hours: number;
  days: number;
  price: number;
  distance: number;
  gain: number;
  altitude: number;
  center: [number, number];
  image: string;
  description: Localized;
  season: ('summer' | 'autumn' | 'spring')[];
  featured: boolean;
}
export interface Article {
  slug: string;
  title: Localized;
  category: Localized;
  description: Localized;
  image: string;
  date: string;
  minutes: number;
  paragraphs: Localized[];
}
