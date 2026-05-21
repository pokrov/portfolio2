# Wissal Saidi Portfolio

A fast, elegant Astro portfolio for Wissal Saidi, designed for deployment on Netlify at `wissalsaidi.com`.

## Tech Stack

- Astro
- TypeScript
- Static content
- No backend
- No database

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Production Build

```bash
npm run build
npm run preview
```

## Deploying to Netlify

1. Push this project to GitHub.
2. Create a new Netlify site from the repository.
3. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add the custom domain: `wissalsaidi.com`.

## Editing Content

Most portfolio content lives in:

- `src/data/profile.ts`

Update skills, projects, social links, and contact details there.

## Resume

The resume button points to `/resume-wissal-saidi.pdf`. Add the real PDF to:

- `public/resume-wissal-saidi.pdf`

The current file is intentionally a placeholder.
