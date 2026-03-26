# Keegdom

Keegdom is a standalone React + Vite + Tailwind homepage for `www.keegan.me`. The repo ships with a fully built single-page home experience today, plus lightweight scaffolding for future routed pages and expanded family/home content later.

## Stack

- React
- Vite
- Tailwind CSS
- TypeScript

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local app at the URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` - Start the Vite dev server
- `npm run build` - Type-check and generate a production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build locally

## Project Overview

- `src/components` - Reusable UI primitives such as buttons, cards, layout wrappers, and navigation helpers
- `src/sections` - Homepage section components
- `src/pages` - `HomePage` plus placeholder pages for future routing
- `src/layouts` - Shared page layout wrappers
- `src/data` - Centralized content and repeatable UI data
- `src/styles` - Global Tailwind and theme styling
- `src/utils` - Small shared utilities

## Notes

- Routing is intentionally not wired yet, but the project structure is ready for React Router or a similar solution.
- Repeated content is driven from `src/data` so the UI can grow without spreading hardcoded copy across components.
- Placeholder pages are minimal on purpose and are meant to become real route targets later.
