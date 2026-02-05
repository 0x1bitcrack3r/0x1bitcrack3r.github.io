# Deployment & Preview Instructions

Quick reference for building, previewing, and deploying this site.

## Build & Preview Locally

- Install dependencies:

```bash
npm ci
```

- Build the static site (outputs to `build/`):

```bash
npm run build
```

- Preview the built output (Vite preview):

```bash
npm run preview
# opens at http://localhost:5173 by default
```

Or use a static server (alternative):

```bash
npx serve -s build -l 5000
# or
python3 -m http.server --directory build 5000
```

## Deploy (Local / Quick)

- Deploy using the `gh-pages` npm helper (pushes `build/` to `gh-pages` branch):

```bash
npm run deploy
```

## GitHub Actions (CI) — Automatic Deploy

- A workflow is provided at `.github/workflows/deploy-pages.yml`.
- It runs on pushes to `main` and `master` and can also be triggered manually from the Actions UI:
  - Go to GitHub → Actions → "Build and Deploy to GitHub Pages" → Run workflow → choose `master` or `main`.

## Important notes

- The site output directory is `build/` (not `dist/`). The workflow and `deploy` script publish `build/`.
- SPA routing: a `404.html` is created automatically after build (via the `postbuild` script) by copying `build/index.html` → `build/404.html`.
- If your Pages site is served from a subpath (project page), ensure `vite.config.ts` has the correct `base` set. For a project page like `/repo-name/` set `base: '/repo-name/'`. For portable static builds, `base: './'` is safe.
- If you run into a blank page after deploy, preview locally with `npm run preview` first and check DevTools → Network for missing assets.

## Form submissions

- This site uses Formspree for contact form handling (client-side). Set `VITE_FORMSPREE_ID` in your `.env` before building to ensure the contact form posts to your Formspree endpoint.

If you want, I can add a short troubleshooting checklist or set up a custom domain CNAME file for you.
