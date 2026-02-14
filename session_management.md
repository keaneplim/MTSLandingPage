# Session & Environment Management

## 1. Local Environment Setup
- **Node.js Version:** 20.x or higher recommended.
- **Package Manager:** NPM.
- **Commands:**
  - `npm run dev`: Starts local development server on `localhost:3000`.
  - `npm run build`: Compiles the project for production (Next.js 16/Turbopack).
  - `npm run lint`: Runs ESLint for code quality checks.

## 2. Directory Structure
```text
/src
  /app           # Next.js App Router (Routes & Layouts)
  /components
    /layout      # Shared UI (Navbar, Footer)
    /sections    # Landing page sections (Hero, Services, etc.)
  /lib           # Utility functions (cn merger)
/public          # Static assets (Favicons, future images)
```

## 3. Configuration Management
- **Tailwind v4:** Managed via `@theme` in `src/app/globals.css`. Custom brand colors (`--color-brand-blue-deep`, etc.) are defined here.
- **Typescript:** `tsconfig.json` is configured with `@/*` aliases for clean imports.
- **Meta:** `src/app/layout.tsx` contains the master SEO metadata for the site.

## 4. State & Logic
- **Navbar Scroll:** Controlled by React `useState` and `useEffect` hooks in `Navbar.tsx` to handle background transitions.
- **Animations:** Managed via `framer-motion` using `whileInView` triggers for high-performance entry animations.
- **Mobile Menu:** Local component state handles the toggle for the hamburger menu on smaller breakpoints.
