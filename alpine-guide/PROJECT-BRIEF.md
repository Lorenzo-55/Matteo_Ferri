# Project Brief — Professional Mountain Guide Website

## 1. Project Overview

Build a modern, visually immersive personal website for a fictional professional mountain guide based in the Italian Alps, primarily operating in the Dolomites.

This is a developer portfolio project intended to showcase frontend development, UI/UX design, interactive data visualization, responsive layouts, and modern web technologies.

The website should feel like a premium outdoor adventure brand rather than a conventional personal portfolio or generic tourism website.

### Primary objectives

- Create a visually impressive, professional website.
- Build an immersive experience through mountain photography, typography, and animations.
- Implement realistic, industry-specific interactive features.
- Keep the application entirely frontend-based.
- Demonstrate a broader range of frontend technologies.
- Prioritize rapid AI-assisted development.
- Produce a complete, deployable portfolio project.

## 2. Fictional Professional and Brand

**Name:** Matteo Ferri

**Profession:** Alpine Mountain Guide

**Location:** Italian Alps and Dolomites, Italy

**Specializations:**
- Guided alpine hiking
- Mountaineering
- Multi-day trekking
- Via ferrata experiences
- Private mountain adventures

### Personality and brand identity

Matteo is an experienced, approachable, adventurous mountain guide with a deep appreciation for nature and the Italian Alps.

His personal brand should communicate:
- Adventure
- Professionalism
- Experience
- Authenticity
- Respect for nature
- Personal connection
- Exploration

The website should feel personal rather than corporate. Visitors should feel that they are getting to know an individual who is passionate about the mountains.

### Suggested branding

**MATTEO FERRI**

ALPINE GUIDE

### Suggested headline

"Beyond the ordinary. Above the clouds."

### Suggested supporting text

"Explore the mountains with a guide who calls them home."

The name and branding are provisional and should be easy to change throughout the application.

All professional credentials, biographies, commercial offerings, and testimonials must be fictional and identified as portfolio demonstration content.

## 3. Technology Stack

### Core technologies
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Additional libraries
- Motion (formerly Framer Motion) for animations
- React Leaflet for interactive maps
- OpenStreetMap for map tiles
- Recharts for elevation profiles
- Lucide React for icons
- i18next and react-i18next for multilingual support
- React Hook Form and Zod for form validation, if appropriate

### Data management
- Local TypeScript or JSON files
- React hooks and Context where necessary
- localStorage for persistent user preferences

### Deployment
- Vercel or Netlify

### Restrictions
- No backend.
- No database server.
- No authentication system.
- No real payment processing.
- No real reservation processing.
- Avoid unnecessary dependencies.

The core website should function as a static frontend application.

External map services may be used, subject to their attribution requirements and usage policies.

## 4. Visual Design Direction

The website should feature a premium, cinematic, editorial outdoor aesthetic.

Take inspiration from high-end outdoor brands, adventure photography websites, boutique travel companies, and modern editorial design.

Avoid generic Bootstrap-style layouts, excessive rounded cards, unnecessary gradients, and dashboard-like interfaces.

### Visual characteristics

- Large, immersive mountain photographs
- Oversized headings
- Strong visual hierarchy
- Generous whitespace
- Earthy and natural colors
- Asymmetrical editorial layouts
- Minimalist navigation
- Subtle parallax effects
- Smooth page transitions
- Topographic contour patterns
- Thin decorative lines
- Refined typography
- Large image-driven sections
- Natural textures where appropriate

### Color palette

| Color | Hex | Purpose |
|---|---|---|
| Forest Green | #23382E | Primary brand color |
| Ivory | #F3F0E7 | Main light background |
| Charcoal | #262826 | Primary text and dark sections |
| Stone | #9B9D8D | Muted secondary elements |
| Copper | #BD693D | Accent color and calls to action |

Use forest green and ivory as the dominant colors. Copper should be used sparingly for accents.

### Typography

Use a sophisticated combination of:
- A bold display font or elegant editorial serif for major headings.
- A clean, highly readable sans-serif for body text, navigation, and metadata.

Typography should play a significant role in the visual identity.

### Photography

Photography should be cinematic, natural, realistic, and consistent.

Image subjects should include:
- Dramatic Dolomite mountain landscapes
- Alpine ridges
- Mountain trails
- Snow-covered peaks
- Mountain refuges
- Hikers and mountaineers
- Sunrise and sunset landscapes
- Professional portraits of the fictional guide
- Climbing and hiking equipment
- Remote alpine environments

Use suitable placeholders initially. AI-generated images will be produced and substituted during development.

Do not rely on arbitrary remote image URLs for the final implementation.

## 5. Website Structure

The website should contain the following pages:

| Page | Route |
|---|---|
| Home | / |
| About | /about |
| Adventures | /adventures |
| Adventure Details | /adventures/:slug |
| Gallery | /gallery |
| Journal | /journal |
| Journal Article | /journal/:slug |
| Contact | /contact |

Shared components should include navigation, footer, buttons, image components, section headings, adventure cards, and layout components.

## 6. Homepage

The homepage should be the strongest visual element of the website.

### Section 1 — Navigation

Create a clean navigation bar containing:
- Personal brand/logo
- Home
- Adventures
- About
- Gallery
- Journal
- Contact
- English/Italian language selector
- Prominent adventure inquiry button

The navigation may initially be transparent over the hero image and transition to a solid background when scrolling.

Include responsive mobile navigation.

### Section 2 — Hero

Create a large, immersive, approximately fullscreen hero section featuring cinematic photography of the Dolomites.

Suggested content:

DOLOMITES · ITALIAN ALPS

**Beyond the ordinary.  
Above the clouds.**

Explore the mountains with a guide who calls them home.

Primary CTA: Explore Adventures

Secondary CTA: Meet Your Guide

The hero should establish the atmosphere of the entire website.

Use subtle animations for text and image appearance without compromising readability or performance.

### Section 3 — Introduction

Introduce the mountain guide and his philosophy.

Suggested heading:

**The mountains are calling.**

Include a short editorial paragraph explaining the personal nature of the guided experiences and the connection between exploration, nature, and adventure.

### Section 4 — Adventure Categories

Create large photographic category cards for:
- Alpine Hiking
- Mountaineering
- Multi-day Treks
- Via Ferrata

Each category should include a photograph, title, brief description, and link to the corresponding filtered adventure catalog.

### Section 5 — Featured Adventures

Show approximately three or four featured adventures.

Each card should display:
- Adventure photograph
- Adventure name
- Activity type
- Region
- Difficulty
- Duration
- Elevation gain, if appropriate
- Starting price
- Link to details

Use elegant, image-driven cards rather than generic e-commerce styling.

### Section 6 — Meet Your Guide

Create an editorial split-layout section with a professional outdoor portrait of Matteo and introductory text.

Suggested heading:

**A life in the mountains.**

Suggested text:

"I'm Matteo, an alpine guide with a passion for wild places, quiet trails, and unforgettable mountain experiences."

Include a link to the full About page.

### Section 7 — The Experience

Explain what makes these guided adventures distinctive.

Possible themes:
- Private and small-group experiences
- Personalized adventures
- Local knowledge
- Respect for the mountain environment
- Preparation and responsible exploration

### Section 8 — Gallery Preview

Include a visually engaging selection of mountain photographs.

Use an asymmetric or editorial gallery layout with varying image sizes.

Link to the complete gallery.

### Section 9 — Journal Preview

Display two or three recent journal articles with imagery and brief descriptions.

### Section 10 — Final CTA

Create a visually powerful closing section.

Suggested heading:

**Your next adventure starts here.**

Supporting text:

"Private guides. Small groups. Extraordinary places."

Include a prominent contact or inquiry CTA.

### Section 11 — Footer

Include:
- Brand name
- Navigation links
- Activity categories
- Contact information
- Social media placeholders
- Language selection
- Portfolio demonstration disclaimer

## 7. About Page

Create a personal, editorial-style biography page.

Include:
- Large professional portrait
- Personal introduction
- Fictional biography
- Connection to the Italian Alps
- Guiding philosophy
- Professional background
- Areas of specialization
- Environmental values
- Personal mountain photography
- Contact CTA

Use a combination of large photographs, text sections, quotations, and alternating layouts.

Do not fabricate real certifications, professional memberships, or regulated qualifications presented as authentic. Any such details must be explicitly fictional.

## 8. Adventures Catalog

The adventures page should function as an interactive experience catalog.

Create approximately 8–12 fictional adventures inspired by real Italian mountain destinations.

### Filters
- Activity type
- Difficulty
- Duration
- Region
- Season

### Sorting
- Price
- Duration
- Difficulty

### Additional functionality
- Search
- Reset filters
- Results count
- Empty results state
- URL-based filter persistence where practical

Each adventure should have a dedicated detail page.

### Example adventures

| Adventure | Activity | Duration | Difficulty | Example Price |
|---|---|---|---|---|
| Tre Cime di Lavaredo | Alpine Hiking | 6 hours | Moderate | €120 |
| Alta Via 1 | Multi-day Trek | 7 days | Challenging | €950 |
| Gran Paradiso | Mountaineering | 2 days | Advanced | €480 |
| Seceda Discovery | Alpine Hiking | 4 hours | Easy–Moderate | €90 |
| Lago di Sorapis | Alpine Hiking | 6 hours | Moderate | €120 |
| Piz Boè | Alpine Hiking | 7 hours | Challenging | €150 |
| Brenta Dolomites | Via Ferrata | 3 days | Advanced | €520 |
| Val Gardena Explorer | Multi-day Trek | 3 days | Moderate | €420 |
| Monte Pelmo | Mountaineering | 2 days | Advanced | €390 |
| Alpe di Siusi | Alpine Hiking | 4 hours | Easy | €85 |

These packages, prices, difficulty ratings, and durations are illustrative mock data, not verified commercial offers or official hiking information.

## 9. Adventure Detail Page

Each adventure should have a comprehensive detail page.

### Hero section
- Large destination photograph
- Adventure name
- Location
- Activity category
- Brief introduction

### Adventure statistics
- Duration
- Distance
- Elevation gain
- Maximum altitude
- Difficulty
- Group size
- Season
- Starting price

Present these using simple icons and a clean, readable layout.

### Overview

Include a detailed description of the adventure and its intended experience.

### Highlights

Display the main highlights of the adventure, such as panoramic viewpoints, alpine lakes, mountain refuges, or notable landscapes.

### Itinerary

Provide a structured itinerary.

For multi-day experiences, organize the itinerary into individual days using an accessible accordion or timeline.

### Interactive Route Map

Use React Leaflet and OpenStreetMap.

Features:
- Interactive map
- Route polyline
- Start and end markers
- Points of interest
- Zoom controls
- Route bounds fitting
- Appropriate map attribution

Route data can be loaded from local GPX files or GeoJSON.

Only use verified public route data for accurate routes. Otherwise, clearly label the displayed routes as illustrative and not suitable for navigation.

### Elevation Profile

Use Recharts to display an interactive elevation chart.

Features:
- Distance on the horizontal axis
- Elevation on the vertical axis
- Area or line chart
- Interactive tooltip
- Elevation gain
- Minimum and maximum elevation
- Total distance

If practical, synchronize chart hover with a corresponding location on the route map.

Elevation data should be derived from the route data or clearly identified as illustrative.

### Equipment Checklist

Create an interactive checklist specific to each adventure.

Example categories:
- Clothing
- Footwear
- Food and water
- Personal equipment
- Technical equipment

Allow visitors to check and uncheck items.

Optionally persist checklist progress in localStorage.

These checklists are demonstration content and should not be presented as complete real-world mountain safety guidance.

### Additional information
- Experience requirements
- What's included
- What's not included
- Meeting location
- Recommended season
- Frequently asked questions

### Adventure Inquiry

Include a prominent inquiry section with:
- Selected adventure
- Preferred date
- Number of participants
- Inquiry button

The button should open or navigate to a prepopulated inquiry form.

No real reservations should be created.

## 10. Gallery Page

Create a professional photography gallery.

### Categories
- Landscapes
- Hiking
- Mountaineering
- Mountain refuges
- Alpine wildlife
- Expedition photography

### Functionality
- Responsive masonry or editorial grid
- Category filtering
- Fullscreen lightbox
- Next and previous image navigation
- Keyboard navigation
- Escape to close
- Lazy-loaded images
- Optional image captions

Photography should remain central to the experience.

## 11. Journal

Create an editorial journal containing fictional articles related to mountain experiences, adventure, and nature.

### Example article titles
- A Morning Above the Clouds
- Exploring the Italian Dolomites
- Life Between Mountain Refuges
- Understanding the Alpine Seasons
- Preparing for a Multi-day Trek
- Finding Solitude in the Mountains
- Photographing the Alps at Sunrise

### Journal listing
- Article thumbnail
- Category
- Publication date
- Title
- Description
- Estimated reading time

### Article detail page
- Large cover image
- Article heading
- Publication information
- Comfortable reading width
- Editorial typography
- Inline photography
- Related articles

Store journal content locally using TypeScript, JSON, or Markdown.

Avoid presenting fictional technical or safety information as authoritative mountaineering advice.

## 12. Contact and Inquiry Page

Create a polished contact page with an adventure inquiry form.

### Form fields
- Full name
- Email
- Selected adventure
- Preferred date
- Number of participants
- Experience level
- Additional message

### Form functionality
- Input validation
- Meaningful error messages
- Prepopulated adventure information
- Submission confirmation state
- Responsive layout

Since this is a frontend-only portfolio project, submissions should be simulated.

Do not claim that an inquiry has been delivered.

Display an explicit confirmation explaining that the website is a demonstration and no real inquiry was sent.

## 13. Multilingual Support

Support:
- English
- Italian

Use i18next and react-i18next.

Implement:
- Language toggle in navigation
- Translated navigation elements
- Translated headings
- Translated page content
- Translated adventure descriptions
- Translated forms and validation messages
- Translated journal content

Persist the selected language in localStorage.

Keep translation content organized separately from UI components.

English can be the default language.

## 14. Animations and Interactions

Use Motion to create polished, purposeful animations.

Possible animations:
- Hero text entrance
- Subtle image reveal effects
- Scroll-triggered section entrances
- Staggered adventure card appearance
- Smooth mobile navigation
- Page transitions
- Image hover scaling
- Gallery lightbox transitions
- Accordion expansion
- Subtle parallax photography
- Navigation background transition on scroll

Animations should enhance the atmosphere without becoming distracting.

Respect the user's reduced-motion preferences.

Avoid excessive animation that delays access to content.

## 15. Suggested Data Structure

Create strongly typed data models for:
- Adventure
- Adventure category
- Route
- Elevation point
- Itinerary day
- Equipment item
- Gallery image
- Journal article
- Inquiry form
- Translation content

An adventure should contain fields such as:
- ID
- Slug
- Title
- Category
- Region
- Short description
- Full description
- Cover image
- Additional images
- Difficulty
- Duration
- Distance
- Elevation gain
- Maximum altitude
- Price
- Group size
- Season
- Highlights
- Itinerary
- Route data
- Elevation data
- Equipment checklist
- Included items
- Excluded items
- Featured status

Keep data separate from presentation components.

## 16. Suggested Project Structure

```
mountain-guide/
├── public/
│   ├── images/
│   │   ├── adventures/
│   │   ├── gallery/
│   │   ├── guide/
│   │   ├── journal/
│   │   └── hero/
│   └── routes/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── adventures/
│   │   ├── gallery/
│   │   ├── maps/
│   │   └── home/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Adventures.tsx
│   │   ├── AdventureDetails.tsx
│   │   ├── Gallery.tsx
│   │   ├── Journal.tsx
│   │   ├── JournalArticle.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── adventures.ts
│   │   ├── gallery.ts
│   │   └── articles.ts
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   ├── locales/
│   │   ├── en.json
│   │   └── it.json
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

This structure is a recommendation rather than a strict requirement. Adjust it where necessary.

## 17. Accessibility and Performance

The website should include:
- Semantic HTML
- Accessible forms
- Keyboard navigation
- Meaningful image alternative text
- Visible focus states
- Appropriate color contrast
- Reduced-motion support
- Responsive images
- Lazy loading
- Optimized image sizes
- Mobile-friendly interactions
- Route-level lazy loading where appropriate
- Useful empty and error states

The website should be visually impressive without unnecessarily sacrificing performance.

## 18. Development Plan

### Phase 1 — Foundation
- Inspect the existing project.
- Configure dependencies.
- Establish project architecture.
- Configure routing.
- Establish the color palette and typography.
- Create reusable layout components.

### Phase 2 — Main Visual Experience
- Build the homepage.
- Build navigation and footer.
- Create the About page.
- Establish responsive design patterns.
- Add initial photography placeholders.
- Implement core animations.

### Phase 3 — Adventures
- Create the adventure data.
- Build the adventures catalog.
- Implement filtering, searching, and sorting.
- Build adventure detail pages.
- Implement itinerary sections.

### Phase 4 — Advanced Interactive Features
- Implement interactive route maps.
- Implement elevation charts.
- Implement equipment checklists.
- Implement inquiry forms.
- Implement prepopulated inquiry details.

### Phase 5 — Content
- Build the gallery.
- Implement the lightbox.
- Build the journal.
- Create article pages.
- Implement multilingual support.

### Phase 6 — Final Polish
- Replace placeholder photographs.
- Refine animations.
- Test responsive layouts.
- Improve accessibility.
- Optimize performance.
- Fix errors.
- Produce a professional README.
- Prepare the application for deployment.

## 19. AI-Assisted Development Workflow

The developer intends to use AI extensively to produce portfolio projects as efficiently as possible.

Codex should take responsibility for implementing the application rather than requiring the developer to manually create every component.

The developer will provide creative direction, review results, and request changes.

### Codex responsibilities
- Inspect existing files before making changes.
- Install and configure appropriate dependencies.
- Implement the application.
- Make reasonable implementation decisions independently.
- Maintain consistent visual design.
- Create reusable, maintainable components.
- Generate realistic fictional content.
- Test functionality.
- Fix build errors and TypeScript errors.
- Document important architectural decisions.
- Avoid unnecessary complexity.
- Report significant limitations and incomplete functionality.

Do not unnecessarily interrupt implementation to request approval for minor design or technical decisions.

### Image generation workflow

Create the website initially using appropriately sized placeholders.

Maintain a clear inventory of required images, including:
- Filename
- Intended page or section
- Subject
- Aspect ratio
- Recommended resolution
- Photographic art direction

The developer will use AI image generation to produce and replace those assets.

Ensure that images can be replaced without requiring structural code changes.

## 20. Final Expectations

The finished application should look like a professionally designed website commissioned by an independent mountain guide.

It should not look like a generic tutorial project, an unfinished template, or an AI-generated dashboard.

The primary priorities are:
1. Visual excellence.
2. Strong professional identity.
3. Cinematic photography.
4. Responsive design.
5. Smooth interactions.
6. Interactive maps and elevation profiles.
7. Clean, maintainable frontend architecture.
8. Rapid development.
9. Portfolio presentation quality.

Begin by inspecting the current workspace, configuring the necessary technologies, and establishing the visual identity. Proceed with implementation rather than merely returning suggestions or code snippets.

Build a complete working first version and refine it progressively.