import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { createContentAPI } from './src/api/content'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'content-api',
      configureServer(server) {
        const { handler } = createContentAPI()
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
