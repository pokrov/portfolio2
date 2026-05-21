import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wissalsaidi.com',
  output: 'static',
  vite:
    process.platform === 'win32'
      ? {
          optimizeDeps: {
            disabled: true,
          },
        }
      : undefined,
});
