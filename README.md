# Maroua BZ — Personal Portfolio

Rebuild of [bmaroua.framer.website](https://bmaroua.framer.website/) as a React + Vite site.

## Pages

- `/` — Home (satin hero, selected projects, personal door, essay)
- `/about` — About / story
- `/projects` — Project case studies gallery + writeups
- `/personal` — “This Barbie Codes and Cares”

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Share online (public link)

### Option A — Vercel (easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New… → Project** and import `Maaarouaaa/mywebsite`
3. Use branch `main` (merge the PR first) or the PR branch `cursor/rebuild-framer-portfolio-a542`
4. Click **Deploy**

You’ll get a link like `https://mywebsite-xxxx.vercel.app` to share.

### Option B — Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site** → import from GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy — share the `*.netlify.app` URL

### Option C — GitHub Pages

After merging to `main`: repo **Settings → Pages → Build and deployment → GitHub Actions**, then the workflow in `.github/workflows/deploy.yml` publishes to:

`https://maaarouaaa.github.io/mywebsite/`
