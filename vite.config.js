import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
    server: {
        open: true, // Automatically opens the browser on server start
        watch: {
          usePolling: true, // Ensures changes are detected, useful in some environments
        },
      }
})