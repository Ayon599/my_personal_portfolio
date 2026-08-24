import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    assetsDir: '.',
    rollupOptions: {
      input: ['index.html', 'project.html']
    }
  }
});
