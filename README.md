# Karan Balani

[![CI](https://github.com/karanbalani/balanikaran.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/karanbalani/balanikaran.github.io/actions/workflows/ci.yml)
[![Link Check](https://github.com/karanbalani/balanikaran.github.io/actions/workflows/link-check.yml/badge.svg)](https://github.com/karanbalani/balanikaran.github.io/actions/workflows/link-check.yml)

Personal website for Karan Balani, built with Astro 6 and deployed at
[karanbalani.tech](https://karanbalani.tech).

## Tech

- Astro 6
- pnpm 10
- Node.js 24
- Astro Image
- Astro Sitemap
- Astro Icon
- Bootstrap Icons SVGs

## Local Development

Use Node.js `24.x`. Corepack is recommended so the pinned pnpm version in
`package.json` is used automatically.

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

This site is intended for Vercel or Cloudflare Pages.

### Cloudflare Pages

- Build command: `pnpm build`
- Build output directory: `dist`
- Node version: `24.x`

For analytics, enable Cloudflare Web Analytics in the Pages project under
Metrics. Cloudflare injects the beacon on the next deployment, so this repo does
not include an analytics script or package.

### Vercel

Vercel detects Astro automatically.

- Framework preset: Astro
- Build command: `pnpm build`
- Output directory: `dist`
- Install command: `pnpm install --frozen-lockfile`
- Node.js version: `24.x`
