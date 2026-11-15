import type { Localized } from '../locales/content';

export const equipment: { category: Localized; items: Localized[] }[] = [
  {
    category: {
      en: 'Clothing',
      it: 'Abbigliamento',
    },
    items: [
      {
        en: 'Weatherproof outer layer',
        it: 'Guscio impermeabile',
      },
      {
        en: 'Warm mid layer',
        it: 'Strato caldo',
      },
      {
        en: 'Sun hat and gloves',
        it: 'Cappello e guanti',
      },
    ],
  },
  {
    category: {
      en: 'Footwear',
      it: 'Calzature',
    },
    items: [
      {
        en: 'Suitable mountain footwear',
        it: 'Calzature da montagna adatte',
      },
    ],
  },
  {
    category: {
      en: 'Food and water',
      it: 'Cibo e acqua',
    },
    items: [
      {
        en: 'Water and trail snacks',
        it: 'Acqua e spuntini',
      },
    ],
  },
  {
    category: {
      en: 'Personal equipment',
      it: 'Attrezzatura personale',
    },
    items: [
      {
        en: 'Daypack and sun protection',
        it: 'Zaino e protezione solare',
      },
      {
        en: 'Personal medication',
        it: 'Farmaci personali',
      },
    ],
  },
];

export const technical: Localized = {
  en: 'Technical equipment agreed with a qualified guide',
  it: 'Attrezzatura tecnica concordata con una guida qualificata',
};
