import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/groq-api': {
        target: 'https://api.groq.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/groq-api/, ''),
        secure: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increased limit slightly to 1000kB as a fallback
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['lucide-react'],
          utils: ['@emailjs/browser', 'sweetalert2', '@studio-freight/lenis']
        }
      }
    }
  }
})
