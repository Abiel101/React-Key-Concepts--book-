# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Tooling and commands

This is a Vite + React 19 + TypeScript + Tailwind CSS project.

Use your preferred Node.js package manager (npm, pnpm, yarn). The examples below assume npm; adapt the commands if you use a different tool.

- **Install dependencies**
  - `npm install`
- **Start dev server** (Vite, with React Fast Refresh)
  - `npm run dev`
- **Type-check and build for production**
  - `npm run build`
  - This runs `tsc -b` followed by `vite build`.
- **Preview production build locally**
  - `npm run preview`
- **Lint the codebase**
  - `npm run lint`
  - Uses `eslint.config.js` with `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.

**Tests:** as of now there is no test script defined in `package.json`. If tests are added later, prefer exposing them via npm scripts (e.g. `npm test`, `npm run test:unit`) and update this section with how to run a single test.

## High-level architecture

### Entry point and routing

- The SPA entry point is `src/main.tsx`.
  - Mounts the app with `ReactDOM.createRoot` on `#root`.
  - Wraps everything in `BrowserRouter` from `react-router-dom`.
  - Uses an `AnimatedRoutes` component to integrate routing with page transitions via `AnimatePresence` from `motion/react`.
- `AnimatedRoutes` defines two top-level routes:
  - `/` → `App` (landing page + chapter overview).
  - `/:chapter` → `ChapterPageTemplate` (per-chapter detail view).
- `ScrollToTop` (in `main.tsx`) listens to route changes with `useLocation` and scrolls the window to the top on navigation.

### Page layout and transitions

- `src/Components/AnimatePageTransition.tsx` (exported as the default, used as `AnimatePageTransition` in `App.tsx`) is essentially a page layout + transition wrapper:
  - Accepts a `type` prop; `type="landingPage"` renders its `children` inside an animated `motion.div` that fades/slides in and out.
  - Any other `type` currently falls back to rendering `ChapterPageTemplate` directly.
- `src/App.tsx` uses `AnimatePageTransition` with `type="landingPage"` to wrap:
  - The animated hero section (custom SVG wave background, motion-based message panel tied to local `message` state).
  - The chapter list section and footer.
- When adding new top-level pages, prefer to go through this transition/layout component so page-level animations remain consistent.

### Chapter data model and navigation

- `src/listOfChapters.tsx` is the core content model for the app:
  - Defines `Chapter` and `Topics` TypeScript interfaces.
  - Exports `chapterData: Chapter[]`, an array describing each chapter:
    - `chapter` (numeric id) and `chapterLink` (route path like `/chapter-4`).
    - `title`, `subTitle`, `summary`, `status`, `images`.
    - `topics: { title, text }[]` — used to render the main content sections.
    - Optional `bonus` and `bonusTip` — drive an expandable "Bonus Tip" accordion in the chapter view.
    - Optional `chapterCode` — an object mapping virtual filenames (e.g. `"/App.js"`, `"/Button.js"`) to code strings that are passed directly into Sandpack.
- `src/Components/AccordionChapters.tsx` uses `chapterData` to render the chapter list on the landing page:
  - Renders a Radix-based accordion where each item corresponds to a chapter.
  - Status (`"Pending"`, `"Working On"`, etc.) controls a badge (and disables the trigger when pending).
  - The "OPEN CHAPTER" button uses a `Link` to `chapter.chapterLink`, which must correspond to the `/:chapter` route convention.

**Adding or updating chapters:**
- To add a chapter, create a new entry in `chapterData` with:
  - A unique `chapter` number and corresponding `chapterLink` (e.g. `/chapter-6`).
  - `title`, `subTitle`, and `summary` (which may be JSX for richer formatting).
  - One or more `topics` objects.
  - Optionally `bonus`, `bonusTip`, and `chapterCode` if you want bonus tips or interactive code.
- The landing page accordion and chapter detail page both derive their content solely from `chapterData`, so updating this single source updates the UI in both places.

### Chapter detail view and interactive code

- `src/Components/chapterPageTemplate.tsx` is the shared detail-page template for all chapters:
  - Determines the `currentChapter` by matching `chapterData` against `location.pathname`.
  - Renders a full-screen header with the chapter title and subtitle, plus a back button (`Link` to `/`).
  - Main body is split into two Radix Tabs:
    - **Content tab (`"chapter-content"`)**
      - Iterates over `currentChapter.topics` and renders headings and paragraphs.
      - If `currentChapter.bonus` is true, shows an `Accordion` containing `currentChapter.bonusTip`.
    - **Code Activity tab (`"chapter-activity"`)**
      - Uses `Sandpack` from `@codesandbox/sandpack-react` with the `aquaBlue` theme.
      - `files={currentChapter.chapterCode}` — the virtual code files are defined directly in `chapterData`.
      - Sandpack options (line numbers, inline errors, editor sizing) are configured here.
- `src/Components/chapters/chapter-*/ChapterCode.tsx` files currently define placeholder React components for chapter-specific activity/example code; they are not yet wired into `ChapterPageTemplate`, but they can be used as a basis for richer per-chapter layouts if needed.

### Design system, styling, and utilities

- **Tailwind & theme:**
  - `src/index.css` imports `tailwindcss` and `tw-animate-css` and defines a color + typography system via CSS custom properties for both light (`:root`) and dark (`.dark`) themes.
  - Uses `@theme inline` to map these CSS variables into Tailwind design tokens (e.g. `--color-primary`, `--font-sans`).
  - Global base layer applies `bg-background` and `text-foreground` to `body`, and defines the `thunder-bold` utility class bound to the custom `ThunderBold` font.
- **Custom font:**
  - `@font-face` in `index.css` loads `Thunder-BoldLC-2.ttf` from `src/assets`, used heavily in headings on the landing and chapter pages.
- **Utility helpers:**
  - `src/lib/utils.ts` defines `cn`, a wrapper around `clsx` + `tailwind-merge` used to compose class names without duplicating Tailwind utilities.
- **UI primitives (Radix + Tailwind):** located under `src/Components/ui/`.
  - `button.tsx` defines a `Button` component using `class-variance-authority` (`cva`) for `variant` and `size` props and `@radix-ui/react-slot` for `asChild` composition.
  - `accordion.tsx` wraps Radix Accordion primitives into `Accordion`, `AccordionItem`, `AccordionTrigger`, and `AccordionContent`, wired up with Tailwind classes and open/close animations.
  - `tabs.tsx` wraps Radix Tabs similarly into `Tabs`, `TabsList`, `TabsTrigger`, and `TabsContent` with a Tailwind-based API.
- These UI primitives, together with the theme defined in `index.css` and `cn` in `lib/utils.ts`, act as a lightweight design system. Prefer reusing and extending these components instead of styling raw HTML elements.

### Build and tooling configuration

- **Vite config (`vite.config.ts`):**
  - Uses `@vitejs/plugin-react` with `babel-plugin-react-compiler` enabled.
  - Adds `@tailwindcss/vite` for Tailwind v4 integration.
  - Defines an alias `"@"` → `path.resolve(__dirname, "src")`.
- **TypeScript config (`tsconfig.json`):**
  - Sets `baseUrl` to the project root and configures path mapping: `"@/*"` → `"./src/*"`.
  - Uses project references to `tsconfig.app.json` and `tsconfig.node.json` for app and tooling/Node-specific settings.
- **ESLint (`eslint.config.js`):**
  - Applies recommended JS + TypeScript rules and the latest React Hooks rules.
  - Integrates `react-refresh`'s Vite config for a better dev experience.
  - Globally ignores the `dist` directory.

## Project purpose (from README)

- This project is an interactive interpretation of the book **"React Key Concepts" by Maximilian Schwarzmüller**.
- The app is intended as a companion to the book, providing animated chapter overviews, textual explanations, and embedded Sandpack code activities per chapter.
