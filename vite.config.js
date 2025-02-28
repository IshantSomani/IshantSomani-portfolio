import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: 'prompt',
  // Fixed typo in includeAssets
  includeAssets: ['favicon.ico', "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Ishant Portfolio",
    short_name: "Ishant Portfolio",
    description: "Namaste! 🙏 I'm Ishant Full Stack Developer",
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/apple-touch-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    theme_color: '#171717',
    background_color: '#ffffff',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
  },
  // Moved devOptions to root level and fixed typo
  devOptions: {
    enabled: true,
    type: 'module',
    navigateFallback: '/index.html',
    suppressWarnings: true,
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA(manifestForPlugIn),
  ],
  build: {
    minify: 'esbuild', // Use esbuild to minify the code
    target: 'es2015',  // Target modern JavaScript for better tree shaking
  },
})