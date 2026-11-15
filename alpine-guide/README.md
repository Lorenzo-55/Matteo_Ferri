# Matteo Ferri · Alpine Guide

A frontend portfolio for a fictional Dolomites guide. All offers, biography, journal stories, prices, itineraries, maps, and equipment lists are demonstration content. The inquiry form performs local validation and never sends data.

## Run

Requires Node.js 22 or later. On Windows PowerShell use `npm.cmd` if script execution policy blocks `npm`.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Architecture

React + TypeScript + Vite, Tailwind CSS 4, React Router, Motion, i18next, React Leaflet / OpenStreetMap, Recharts, and Lucide. The editorial visual system uses forest green, ivory, copper, and system Georgia / Arial fonts. No external font requests.

- `src/main.tsx`: React bootstrap, router, styles, and translation initialization.
- `src/App.tsx`: application shell and language / scroll effects.
- `src/AppRoutes.tsx`: route definitions and document titles.
- `src/pages/`: one module for each page.
- `src/components/layout/`: shared navigation and footer.
- `src/components/ui/`: reusable image, button, heading, and animation components.
- `src/components/adventures/`: adventure cards and equipment checklist.
- `src/components/journal/`: journal article cards.
- `src/data/`: adventures, gallery, articles, and equipment as named records.
- `src/types/content.ts`: shared adventure and article types.
- `src/hooks/useCopy.ts`: translation helpers for UI and localized content.
- `src/locales/en.ts` and `src/locales/it.ts`: language dictionaries.
- `src/i18n.ts`: translation initialization and saved language preference.
- `src/utils/`: small shared date helpers.
- `src/components/RouteExplorer.tsx`: lazy-loaded route map and elevation profile.
- `src/styles.css`: responsive visual system and reduced-motion handling.
- `public/images`: local replaceable illustration placeholders.
- `PROJECT-BRIEF.md`: supplied project brief.

Catalog filters and sorting persist in the URL. Language and per-adventure packing lists persist in localStorage when available. Contact fields stay in component memory and clear on navigation/reload. A native modal dialog provides keyboard focus containment, Escape dismissal, arrow navigation, and return focus in the gallery.

## Deployment

Deploy as a Vite static app to Vercel or Netlify: build command `npm run build`, output `dist`. SPA rewrite configuration is included for both services. No environment variables or backend required.

## Current limits

Photography is intentionally not final. Four original local SVG landscape illustrations stand in for the photo library, including the guide portrait. See `IMAGE-INVENTORY.md` before replacing them. Gallery categories are illustrative; illustrations do not depict wildlife or an actual portrait. Maps use an internet connection for OpenStreetMap tiles, retaining visible attribution. Coordinates and profiles are synthetic and must never be used for navigation. Itineraries are demonstration stages rather than verified route instructions. Chart hover and map position are not synchronized. The journal contains three fictional essays. No certification, professional membership, testimonial, email address, or social account is presented as authentic.

## Validation

`npm run build` performs strict TypeScript checking and creates the production bundle. Browser and accessibility verification status is reported separately when delivered; a passing build alone is not browser QA.

## Code formatting

Use `npm run format` to format source, styles, configuration, and documentation with Prettier. Use `npm run format:check` to check formatting without changing files. The shared configuration uses two-space indentation, single quotes, and a 90-character target line width.
