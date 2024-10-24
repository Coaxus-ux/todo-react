import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/Components',
      '@styles': '/src/Styles',
      '@pages': '/src/Pages',
      '@assets': '/src/assets',
      '@storage': '/src/Storage',
      '@hooks': '/src/Hooks',
    },
  }
})
