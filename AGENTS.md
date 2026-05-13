# AI Agent Instructions for Astro Portfolio

## Quick Start

**Tech Stack**: [Astro 5.6](https://astro.build) + React 19 + TailwindCSS 4 + TypeScript  
**Package Manager**: pnpm  
**Node Version**: Check `package.json` for engine specification

### Essential Commands

```bash
pnpm dev       # Start dev server on localhost:4321
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm i         # Install dependencies
```

---

## Project Architecture

### Component Strategy: Astro + React Hybrid

- **Astro Components (`.astro`)**: Static, server-rendered content
  - Use for: Layout structure, static page sections, image optimization
  - Props accessed via `Astro.props as TypeName` pattern
  - Examples: `Nav.astro`, `Layout.astro`, `Introduction.astro`, `RecentProjects.astro`

- **React Components (`.tsx`)**: Interactive, client-side interactivity
  - Use for: State-dependent UI (tabs, filters, DOM manipulation)
  - Examples: `HeadingSwitcher.tsx` (tab switching), `MapShowcase.tsx` (map interaction), `WorkEduComp.tsx` (content display)
  - Always use `client:load` or `client:only` directive when importing into Astro pages

**Decision Rule**: Start with Astro; use React only when client-side state is required.

---

## File & Naming Conventions

### Structure

```
src/
├── components/     # Mix of .astro and .tsx files (PascalCase names)
├── data/          # TypeScript interfaces and data exports (projectsData.ts)
├── layouts/       # Master Layout.astro template
├── pages/         # File-based routing (index, projects, workedu, contact)
├── assets/        # SVGs and design assets
└── styles/        # global.css with Tailwind imports + CSS variables
```

### Component Naming

- PascalCase for all components (both Astro and React)
- Suffix `.astro` or `.tsx` based on rendering strategy
- No generic wrapper naming; keep names semantic to content

---

## Styling & Theme System

### Tailwind v4 Integration

- Config via `@tailwindcss/vite` plugin in `astro.config.mjs`
- Utility-first approach: `flex space-y-6 pt-6 rounded-full`
- Responsive utilities included by default (no custom breakpoint config)

### Custom Theme (Light/Dark Mode)

Located in `src/styles/global.css`:

```css
--background, --background-muted, --foreground, --foreground-muted
```

Uses `light-dark()` function for automatic light/dark switching—no `dark:` prefix needed.

### Custom Fonts & Utilities

- **Fonts**: "Public Sans" (body), "Sora" (headings)
- **Custom utilities**: `.font-sora`, `.text-muted`, `.inTextLink`, `.link`
- **Hover patterns**: `group` and `group-hover` for interactive feedback

---

## Data Management

### Data Pattern

- Centralized exports in `src/data/projectsData.ts`
- TypeScript interfaces for type safety
- Example interface:
  ```typescript
  interface Project {
    title: string;
    company: string;
    duration: string;
    description: string;
    image: string;
    technologies: string[];
  }
  ```

### Usage Pattern

- Astro components: Import and process data server-side (sorting, filtering)
- React components: Receive data as props, render with `.map()`
- **Note**: Work/education data is hardcoded in `WorkEduComp.tsx`; consider extracting to separate data file for consistency

---

## Key Conventions & Patterns

### TypeScript in Components

```typescript
// Astro component
interface IntroductionProps {
  title: string;
}

const props = Astro.props as IntroductionProps;
```

```typescript
// React component
interface ProjectProps {
  project: Project;
}

const ProjectsComp: React.FC<ProjectProps> = ({ project }) => { ... };
```

### Image Optimization

- Use Astro's `Image` component from `astro:assets` for automatic optimization
- Enables lazy loading and responsive sizing

### Hydration Directives

- `client:load`: Hydrate on page load (used for tabs, main interactive content)
- `client:only="react"`: Skip server rendering entirely (used for interactive maps)

### Icon System

- [astro-icon](https://www.astrojs.org/en/guides/integrations-guide/icon/) integration
- Icons referenced by namespace: `logos:html-5`, `logos:java`, `logos:angular-icon`
- Icon sets: `@iconify-json/grommet-icons`, `@iconify-json/logos`

---

## Common Development Tasks

### Adding a New Project to Portfolio

1. Add entry to `src/data/projectsData.ts` with `Project` interface
2. Add image to `public/projects/` directory
3. `RecentProjects.astro` automatically displays latest 2 projects

### Creating a New Page

1. Create `.astro` file in `src/pages/` (file-based routing)
2. Import and use `Layout` from `src/layouts/Layout.astro`
3. Wrap page content inside the `Layout` component
4. For interactive content, import React components with `client:load`

### Adding Styling

- Use Tailwind utilities first (existing breakpoints work out of the box)
- For custom styles, add to `src/styles/global.css` or inline with `<style>` blocks
- Reference CSS variables for theme colors: `var(--foreground)`, `var(--background)`

---

## Environment & Configuration

### Environment Variables

- MapTiler API key: `import.meta.env.PUBLIC_MAPTILER_API_KEY`
- Prefix with `PUBLIC_` to expose to client-side code

### Linting

- Project uses [Biome](https://biomejs.dev/) for linting
- Suppress rules with: `// biome-ignore lint/rule-name: explanation`

### Build Output

- Production build: `dist/` directory (created by `pnpm build`)
- Preview locally before deployment with `pnpm preview`

---

## Potential Pitfalls & Solutions

| Issue                              | Cause                           | Solution                                                         |
| ---------------------------------- | ------------------------------- | ---------------------------------------------------------------- |
| React component state not updating | Forgot `client:load` directive  | Add `client:load` when importing React component into Astro page |
| Image not displaying               | Relative path vs static asset   | Use `src/assets/` and import, or `public/` with `/` prefix       |
| Tailwind classes not applied       | Astro not scanning file         | Ensure file is `.astro` or `.tsx` in `src/` directory            |
| Dark mode not working              | CSS variables undefined         | Check `src/styles/global.css` includes `light-dark()` function   |
| Map interactive features broken    | Missing `useRef` or `useEffect` | Ensure `MapShowcase.tsx` uses `client:only="react"` directive    |
| New dependency conflicts           | pnpm monorepo setup             | Check `pnpm-workspace.yaml` for workspace configuration          |

---

## Development Workflow Tips

- **Hot Module Reload (HMR)**: Dev server auto-refreshes on `.astro` and `.tsx` changes
- **Type Checking**: TypeScript compilation errors appear in terminal during dev
- **Browser DevTools**: React DevTools work for `.tsx` components; use Chrome DevTools for Astro-specific HTML
- **Performance**: Astro pre-renders static pages; React component hydration is automatic based on directives

---

## Links to Existing Documentation

- [Astro Docs](https://astro.build/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React 19 Docs](https://react.dev)
- Project README: See [README.md](README.md) for feature overview and project structure
