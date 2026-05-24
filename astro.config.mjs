import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.284868.xyz',
  integrations: [sitemap()],
  redirects: {
    '/download/daphile-25-05': {
      status: 307,
      destination: 'https://pan.baidu.com/s/1GA-RI86dwR7H0GOcS0IeCQ?pwd=ljfh'
    }
  }
});
