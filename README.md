# Portfolio (Astro)

Personal UI/UX Design Portfolio — restrained, designer-first.

Routes:

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

## Deploy to GitHub Pages

URL:

- `https://maxine99.github.io/jiayi-portfolio/`

GitHub Actions workflow:

- `.github/workflows/deploy.yml`
