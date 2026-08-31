# PLAYFORM

Production-ready static website for PLAYFORM, an interactive software studio working across games, XR, installations and digital products.

## Local development

Requires Node.js 22.12+ (Node 24 is also supported).

```bash
npm install
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

The static output is written to `dist/`. No backend or platform-specific runtime is required.

## Content

- Global settings, navigation, homepage statements, process and contact details: `src/data/site.ts`
- Services: `src/content/services/*.md`
- Portfolio projects: `src/content/projects/*.md`
- Collection schemas and required fields: `src/content.config.ts`

To add a service or project, copy an existing Markdown file in the matching collection, give it a unique `id` and `slug`, update its structured frontmatter, and set `featured: true` if it should appear on the homepage. Astro validates the content during the build.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source.

The workflow receives GitHub’s origin and base path automatically, so both `username.github.io/repository/` and user/organization sites work. For another host or a custom domain, set `SITE_URL` and `BASE_PATH` as shown in `.env.example`; the frontend does not need to be rewritten.

## Future CMS integration

Business content is intentionally kept outside visual components. Services and projects use type-safe Astro content collections; global singleton content uses one typed data module. These are clean seams for a future Git-based CMS or API-backed content adapter. Forms, authentication, payments and persistence are deliberately not implemented in this first static release.

The original UnsuiGo prototype files remain at the repository root as legacy source material and are not included in Astro’s production build.
