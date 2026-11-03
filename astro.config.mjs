import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://airconditioningrepairresedaca.us',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
  build: {
    format: 'directory',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
