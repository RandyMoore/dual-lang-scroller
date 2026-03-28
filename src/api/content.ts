import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

interface ContentResponse {
  id: string
  en: string
  es: string
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function createContentAPI() {
  const contentPath = resolve(__dirname, '../../content')
  const enPath = resolve(contentPath, 'en', 'content.txt')
  const esPath = resolve(contentPath, 'es', 'content.txt')
  
  // Debug: log the paths
  console.log('Content API paths:', { contentPath, enPath, esPath })
  console.log('Files exist:', { en: existsSync(enPath), es: existsSync(esPath) })
  console.log('Content files:', { en: readFileSync(enPath, 'utf-8'), es: readFileSync(esPath, 'utf-8') })
  
  return {
    handler: (req: any, res: any, next: () => void) => {
      if (req.url === '/api/content' && req.method === 'GET') {
        try {
          const enContent = readFileSync(enPath, 'utf-8')
          const esContent = readFileSync(esPath, 'utf-8')
          
          const content: ContentResponse = {
            id: 'content',
            en: enContent.split('\n')[0].trim(),
            es: esContent.split('\n')[0].trim()
          }

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify([content]))
        } catch (error) {
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Failed to read content files' }))
        }
      } else {
        next()
      }
    }
  }
}