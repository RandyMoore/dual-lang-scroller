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
        // Use fixtures directory for development, content directory for preview
        const contentPath = process.env.NODE_ENV === 'development'
          ? resolve(__dirname, 'tests/fixtures/content')
          : resolve(__dirname, 'content')
        
        const { handler } = createContentAPI(contentPath)
        server.middlewares.use(handler)
      }
    },
    {
      name: 'content-api-preview',
      configurePreviewServer(server) {
        // Use content directory for preview
        const contentPath = resolve(__dirname, 'content')
        const { handler } = createContentAPI(contentPath)
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
