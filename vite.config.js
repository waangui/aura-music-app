import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            colors: {
              'custom-purple': '#BFACC8',
              'custom-light': '#F5F2F6',
            },
          },
        },
      },
    }),

  ],

  server: {
    
    proxy: {
      '/api': {
        target: 'https://www.theaudiodb.com', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

})
