# WGA Lean Six Sigma Training Platform

A premium, client-facing Lean Six Sigma certification platform built for Wentworth Global Advisors. Fully static — deployable to Vercel, Netlify, or any static host.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (CSS-first configuration)
- React Router v6
- Recharts for data visualization
- Framer Motion for transitions
- localStorage for progress persistence

## Development

```bash
cd training
npm install
npm run dev      # starts dev server at localhost:5173/training/
npm run build    # production build to dist/
```

## Architecture: Content Data Model

All course content is **data-driven**. The UI components render from structured TypeScript data files. Adding a new course requires only adding data — zero UI changes.

### Directory Structure

```
src/
├── data/
│   ├── courses.ts              # Master course registry
│   └── yellowBelt/
│       ├── index.ts            # yellowBeltCourse object
│       ├── modules1to4.ts      # Modules 1-4 data
│       └── modules5to8.ts      # Modules 5-8 data
├── types/
│   ├── course.ts               # All course type definitions
│   └── progress.ts             # Progress tracking types
├── components/
│   ├── ui/                     # Button, Card, Badge, ProgressBar, Callout, DiagramFrame, QuizQuestion
│   ├── layout/                 # Header, PageLayout
│   ├── lesson/                 # LessonContentRenderer
│   ├── simulations/            # 6 interactive simulations
│   └── diagrams/               # Static SVG/chart components
└── pages/                      # CatalogPage, CoursePage, LessonPage, QuizPage, DashboardPage, CertificatePage
```

### LessonContent Block Types

| type | Required fields | Renders as |
|------|----------------|------------|
| `paragraph` | `text` | Body paragraph |
| `heading` | `text`, `level: 2\|3` | H2 or H3 |
| `callout` | `variant`, `text`, optional `title` | Callout box |
| `list` | `items: string[]` | Bulleted list |
| `ordered-list` | `items: string[]` | Numbered list |
| `table` | `headers`, `rows` | Data table |
| `key-terms` | `terms: {term, definition}[]` | Definition list |
| `simulation` | `simulationId`, `title`, `description` | Interactive simulation |
| `diagram` | `diagramId`, `title` | SVG diagram |
| `chart` | `chartId`, `title`, `description` | Recharts chart |

## Authoring Green Belt Content

1. Create `src/data/greenBelt/` with module files matching the Yellow Belt pattern
2. Create `src/data/greenBelt/index.ts` exporting `greenBeltCourse: Course`
3. In `src/data/courses.ts`, import and replace the stub:

```typescript
import { greenBeltCourse } from './greenBelt';
// change status to 'available'
```

No UI changes required — the engine is fully data-driven.

## Deployment

```bash
npm run build
# Upload dist/ to Vercel, Netlify, or any static host
# App base path is /training/
```

For Netlify SPA routing, add `public/_redirects`:
```
/training/*  /training/index.html  200
```
