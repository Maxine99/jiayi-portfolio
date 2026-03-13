# Portfolio (Astro)

A restrained, designer-first portfolio site (Work-first, high whitespace, subtle motion), with bilingual routes:

- Chinese: `/`
- English: `/en/`

## Local development

```bash
cd portfolio
npm install
npm run dev
```

## Replace covers

Put your cover images in `public/covers/` and keep the filenames:

- `ops.(jpg|png|webp)`
- `cerebra.(jpg|png|webp)`
- `cqms.(jpg|png|webp)`
- `luyitong.(jpg|png|webp)`
- `veglog.(jpg|png|webp)`
- `nav.(jpg|png|webp)`

If you add real images, update `src/content/site.ts` to point to the new extensions (or keep SVG placeholders).

## Favicon

- Replace `public/favicon.svg` (and optionally add `public/favicon.ico`).

## Deploy to GitHub Pages (recommended)

Your GitHub Pages URL will be:

- `https://maxine99.github.io/jiayi-portfolio/`

### One-click deploy (GitHub Actions)

This repo already includes a workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repo named `jiayi-portfolio` under `Maxine99`
2. Push this project to the repo (default branch: `main`)
3. In GitHub repo settings:
   - Settings → Pages
   - Source: **GitHub Actions**

### Manual build (optional)

Build with base path set to your repo name:

```bash
BASE_PATH=/jiayi-portfolio npm run build
```

Then publish `dist/` to GitHub Pages if you prefer a non-actions flow.
