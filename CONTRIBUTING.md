# Contributing

Thanks for taking the time to improve this site.

This repository powers [karanbalani.tech](https://karanbalani.tech). The best
contributions are small, focused fixes such as typo corrections, broken link
updates, accessibility improvements, or build/maintenance updates.

## Local Setup

Use Node.js `24.x` and pnpm `10.x`.

```sh
corepack enable
pnpm install
pnpm dev
```

## Pull Requests

Before opening a pull request, run:

```sh
pnpm format:check
pnpm check
pnpm build
```

Keep pull requests focused on one change. For content changes, include enough
context in the PR description to make the intent clear.
