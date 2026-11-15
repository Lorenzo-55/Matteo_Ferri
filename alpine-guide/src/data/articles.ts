import type { Article } from '../types/content';

export const articles: Article[] = [
  {
    slug: 'morning-above-the-clouds',
    title: {
      en: 'A morning above the clouds',
      it: 'Un mattino sopra le nuvole',
    },
    category: {
      en: 'Slow moments',
      it: 'Momenti lenti',
    },
    description: {
      en: 'On early starts and the simple luxury of watching a new day arrive.',
      it: 'Partenze all’alba e il semplice lusso di osservare un nuovo giorno.',
    },
    image: '/images/mountain-1.svg',
    date: '2026-06-12',
    minutes: 4,
    paragraphs: [
      {
        en: 'The refuge was still quiet when I stepped outside. Below the terrace, cloud filled the valley like a pale sea. There was no grand plan for the morning, just a cup of coffee and time to watch the ridges take shape.',
        it: 'Il rifugio era ancora silenzioso quando uscii. Sotto la terrazza, le nuvole riempivano la valle come un mare chiaro. Nessun grande programma, soltanto un caffè e il tempo di osservare le creste.',
      },
      {
        en: 'In this imagined memory, what stays with me is not the summit. It is the changing colour of the rock, the cold railing beneath my hand, and the conversation that began when another early riser joined me.',
        it: 'In questo ricordo immaginario non resta la vetta, ma il colore mutevole della roccia, la ringhiera fredda e la conversazione con un altro mattiniero.',
      },
      {
        en: 'The mountains give us many ways to measure a day. Sometimes the best one is how much we noticed along the way.',
        it: 'Le montagne offrono molti modi di misurare una giornata. A volte il migliore è quanto abbiamo osservato lungo il cammino.',
      },
    ],
  },
  {
    slug: 'between-mountain-refuges',
    title: {
      en: 'Life between mountain refuges',
      it: 'La vita tra i rifugi',
    },
    category: {
      en: 'Mountain culture',
      it: 'Cultura alpina',
    },
    description: {
      en: 'Shared tables, well-worn boots, and the places that make a journey feel like home.',
      it: 'Tavoli condivisi, scarponi vissuti e luoghi che fanno sentire a casa.',
    },
    image: '/images/mountain-3.svg',
    date: '2026-05-24',
    minutes: 5,
    paragraphs: [
      {
        en: 'A refuge is more than a place to spend the night. In this fictional journey, it is where the pace changes. Boots wait by the door, maps cover the table, and strangers compare the small details of their day.',
        it: 'Un rifugio è più di un posto per dormire. In questo viaggio immaginario è dove cambia il ritmo. Gli scarponi aspettano alla porta, le mappe coprono il tavolo e gli ospiti raccontano la giornata.',
      },
      {
        en: 'The next morning brings another path, but the warmth of that evening travels with us. The journey is made of these pauses as much as the walking.',
        it: 'Il mattino porta un altro sentiero, ma il calore della serata ci accompagna. Il viaggio è fatto di queste pause tanto quanto del cammino.',
      },
    ],
  },
  {
    slug: 'finding-solitude',
    title: {
      en: 'Finding solitude in the mountains',
      it: 'Trovare la quiete in montagna',
    },
    category: {
      en: 'Reflections',
      it: 'Riflessioni',
    },
    description: {
      en: 'A quieter trail and a reminder to leave room for the unexpected.',
      it: 'Un sentiero tranquillo e un invito a lasciare spazio all’imprevisto.',
    },
    image: '/images/mountain-4.svg',
    date: '2026-04-09',
    minutes: 3,
    paragraphs: [
      {
        en: 'We often arrive in the mountains with a picture already in mind. This imagined walk began differently: with no photograph to recreate, only an interest in what might be around the next bend.',
        it: 'Spesso arriviamo in montagna con un’immagine già in mente. Questa passeggiata immaginaria iniziò senza fotografie da ricreare, solo curiosità per la prossima curva.',
      },
      {
        en: 'There were no dramatic discoveries. A bird crossed the valley. The light moved across a meadow. We stopped talking for a while and listened. It was enough.',
        it: 'Nessuna scoperta clamorosa. Un uccello attraversò la valle. La luce scivolò su un prato. Smettemmo di parlare per ascoltare. Bastava così.',
      },
    ],
  },
];
