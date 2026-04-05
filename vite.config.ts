import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, basename, extname, dirname } from 'node:path'
import { fileURLToPath as fu } from 'node:url'
import { createContentAPI } from './src/api/content'

const __filename = fu(import.meta.url)
const __dirname = dirname(__filename)

function buildContentJson() {
  const enDir = resolve(__dirname, 'content/en')
  const esDir = resolve(__dirname, 'content/es')

  const esMap = new Map(
    readdirSync(esDir)
      .filter(f => f.endsWith('.txt'))
      .map(f => [basename(f, extname(f)), f])
  )

  const items = readdirSync(enDir)
    .filter(f => f.endsWith('.txt'))
    .filter(f => esMap.has(basename(f, extname(f))))
    .map(f => {
      const id = basename(f, extname(f))
      return {
        id,
        en: readFileSync(resolve(enDir, f), 'utf-8').trim(),
        es: readFileSync(resolve(esDir, esMap.get(id)!), 'utf-8').trim(),
      }
    })

  mkdirSync(resolve(__dirname, 'public'), { recursive: true })
  writeFileSync(resolve(__dirname, 'public/content.json'), JSON.stringify(items))
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
      },
      manifest: {
        name: 'Dual-Language Scroller',
        short_name: 'DLS',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
      },
    }),
    {
      name: 'build-content-json',
      buildStart() {
        buildContentJson()
      },
    },
    {
      name: 'content-api',
      configureServer(server) {
        const contentPath = resolve(__dirname, 'tests/fixtures/content')
        const { handler } = createContentAPI(contentPath)
        server.middlewares.use(handler)
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
