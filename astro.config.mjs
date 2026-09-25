import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkAutolinks } from './src/plugins/remark-autolinks.mjs';

// https://astro.build/config
export default defineConfig({
  // Ganti jika diupload ke subfolder di share hosting, mis. '/interior'
  // base: '/',
  site: 'https://interiorbatam.web.id',
  trailingSlash: 'ignore',
  build: {
    format: 'directory', // tiap route jadi folder/index.html -> kompatibel htdocs
    assets: '_astro',
  },
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },
  markdown: {
    remarkPlugins: [remarkAutolinks],
  },
  integrations: [
    sitemap({
      // exclude halaman yang belum siap / draft
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  scopedStyleStrategy: 'class',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
