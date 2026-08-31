import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const githubBase = repository && !repository.endsWith('.github.io') ? `/${repository}` : '/';
const base = process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS ? githubBase : '/');
const site = process.env.SITE_URL ?? 'https://playform.studio';

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
