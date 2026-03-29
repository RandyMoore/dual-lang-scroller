import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { createContentAPI } from './src/api/content'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'content-api',
      configureServer(server) {
        // Use fixtures directory for development to avoid conflicts with project root 'content' directory
        const { handler } = createContentAPI(resolve(__dirname, 'tests/fixtures/content'))
        server.middlewares.use(handler)
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
