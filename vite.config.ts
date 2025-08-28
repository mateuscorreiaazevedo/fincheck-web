import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteTsConfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsConfigPaths()
  ],
  server: {
    open: true,
    port: 3000
  }
})
