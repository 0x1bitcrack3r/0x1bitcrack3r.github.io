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

## CI: Create a Personal Access Token (PAT) and add `GH_PAGES_TOKEN`

If your GitHub Actions run fails with a git push 403 (permission denied to `github-actions[bot]`), create a Personal Access Token (PAT) and add it as a repository secret so the deploy action can push to `gh-pages`.

1. Create a Personal Access Token (classic)

- Go to your GitHub account Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token.
- Give the token a descriptive name, e.g. `gh-pages-deploy-token`.
- Expiration: choose an expiration (30/90/Custom) or `No expiration` (rotate regularly if you choose no expiration).
- Scopes: check `repo` (this gives the token permission to push to branches). For minimal privileges ensure the token can write to the repository.
- Click **Generate token** and copy the token value now — you will not be able to see it again.

2. Add the token as a repository secret

- Go to your repository on GitHub → Settings → Secrets and variables → Actions → New repository secret.
- Name the secret: `GH_PAGES_TOKEN`
- Paste the token value you copied and save.

3. Re-run the workflow

- Go to Actions → "Build and Deploy to GitHub Pages" → select the workflow and click **Run workflow** (choose `master` or `main`), or push a new commit to trigger the workflow.

Notes & security

- If your repository is part of an organization, org policies may restrict creating PATs or using them in Actions — check with your org admin if needed.
- Rotate tokens regularly and remove the token if you no longer need CI pushes.
- If you prefer not to use a PAT, you can deploy locally with `npm run deploy` (push from your machine with your credentials) as a quick alternative.
