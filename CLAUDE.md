# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript portfolio website built with Vite, showcasing Ranjana Sarma's professional profile. The project uses modern web technologies including shadcn/ui components, Tailwind CSS, and Framer Motion for animations.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Tech Stack & Architecture

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom animations
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/          # Main page components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Timeline.tsx    # Experience timeline
│   ├── Services.tsx    # Services/projects
│   └── Contact.tsx     # Contact form
├── pages/              # Route components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── main.tsx           # Application entry point
```

## Component Architecture

The application follows a single-page portfolio structure with:
- **App.tsx**: Root component with routing, providers, and toast notifications
- **Index.tsx**: Main page assembling all sections in order
- **Section Components**: Self-contained components for each portfolio section

## UI System

- Uses shadcn/ui component library with Tailwind CSS
- Component aliases configured in `components.json`
- Custom animations defined in `tailwind.config.ts`
- CSS variables for theming in `src/index.css`

## Path Aliases

Configured in `vite.config.ts`:
- `@/` → `src/`
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

## Linting & Code Quality

- ESLint with TypeScript support
- React Hooks plugin for hook usage validation
- React Refresh plugin for fast development
- Unused variables warning disabled for development flexibility

## Development Notes

- Server runs on port 3000 with IPv6 support
- Uses `lovable-tagger` in development mode for component identification
- No test framework currently configured
- ESLint configuration allows unused variables (development mode)