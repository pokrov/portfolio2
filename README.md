# Wissal Saidi Portfolio

A fast, elegant Astro portfolio for Wissal Saidi, a junior frontend developer based in Morocco and open to remote opportunities. The site is static, SEO-friendly, and ready for Netlify deployment at `wissalsaidi.com`.

## Tech Stack

- Astro
- Static content
- Netlify hosting
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
4. Netlify reads `netlify.toml`, including the Node version and security headers.

## Custom Domain

To connect `wissalsaidi.com`:

1. In Netlify, open Site settings.
2. Go to Domain management.
3. Add `wissalsaidi.com` as the custom domain.
4. Update DNS records at the domain provider using Netlify's instructions.
5. Enable HTTPS after DNS propagation.

## Editing Content

Most portfolio content lives in:

- `src/data/profile.ts`

Update the profile, social links, skills, remote collaboration strengths, and projects there.

## Updating Projects

Edit the `projects` array in `src/data/profile.ts`. Each project supports:

- `title`
- `year`
- `category`
- `description`
- `technologies`

## Replacing The CV

The Download CV buttons point to:

- `public/resume-wissal-saidi.pdf`

Replace that file with the final PDF CV while keeping the same filename.
