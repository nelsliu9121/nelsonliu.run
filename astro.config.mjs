import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nelsonliu.run',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-tw'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
