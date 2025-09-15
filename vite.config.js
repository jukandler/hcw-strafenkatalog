import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // base: process.env.NODE_ENV === 'production' ? '/hcw-strafenkatalog/' : '/'
  base: '/hcw-strafenkatalog/',
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: undefined,
  //     },
  //   },
  // },
})
