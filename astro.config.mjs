// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: { optimizeDeps: { include: ['leaflet'] } },

  integrations: [tailwind(), icon()]
});