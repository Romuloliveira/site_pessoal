import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Set this to your GitHub repo name for GitHub Pages deployment
  // Example: if repo is github.com/romuloliveira/portfolio → base: '/portfolio/'
  // If using a custom domain → base: '/'
  base: '/site_pessoal',
})
