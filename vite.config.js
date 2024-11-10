import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      '@assets': path.resolve(__dirname, "./src/assets"),
      '@lib': path.resolve(__dirname, "./src/lib"),
    },
  },
})
