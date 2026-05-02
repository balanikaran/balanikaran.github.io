# Karan Balani Portfolio

Personal portfolio for Karan Balani, built with Astro 6.

## Tech

- Astro 6
- pnpm
- Bootstrap 5
- Sass
- Lucide icons

## Local Development

Use Node `22.12.0` or newer. Corepack is recommended so the pinned pnpm
version in `package.json` is used automatically.

```sh
corepack enable
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321` by default.

## Build

```sh
pnpm build
pnpm preview
```

Astro writes the production build to `dist/`.

## Deploy

### Cloudflare Pages

- Build command: `pnpm build`
- Build output directory: `dist`
- Node version: `22.12.0` or newer

For analytics, enable Cloudflare Web Analytics in the Pages project under
Metrics. Cloudflare injects the beacon on the next deployment, so this repo does
not include an analytics script or package.

### Vercel

Vercel detects Astro automatically.

- Framework preset: Astro
- Build command: `pnpm build`
- Output directory: `dist`
- Install command: `pnpm install --frozen-lockfile`
