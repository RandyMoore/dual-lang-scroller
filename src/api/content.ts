import { readFileSync, existsSync } from 'fs'
import { resolve, dirname, basename, extname } from 'path'
import { fileURLToPath } from 'url'

interface ContentResponse {
  id: string
  en: string
  es: string
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function getPaths(fixturePath?: string) {
  const contentPath = fixturePath || resolve(__dirname, '../../content')
  return {
    en: resolve(contentPath, 'en', 'content.txt'),
    es: resolve(contentPath, 'es', 'content.txt')
  }
}

export function createContentAPI(fixturePath?: string) {
  return {
    handler: (req: any, res: any, next: () => void) => {
      if (req.url === '/api/content' && req.method === 'GET') {
        try {
          const paths = getPaths(fixturePath)
          const enFileName = basename(paths.en, extname(paths.en))
          const esFileName = basename(paths.es, extname(paths.es))
          
          // Check if both files exist and have matching names
          const filesExist = existsSync(paths.en) && existsSync(paths.es)
          const namesMatch = enFileName === esFileName
          
          if (!filesExist || !namesMatch) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Content files not found or names do not match' }))
            return
          }
          
          const enContent = readFileSync(paths.en, 'utf-8')
          const esContent = readFileSync(paths.es, 'utf-8')
          
          const content: ContentResponse = {
            id: enFileName,
            en: enContent.trim(),
            es: esContent.trim()
          }

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify([content]))
        } catch (readError) {
          res.writeHead(404, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Failed to read content files' }))
        }
      }
      next()
    }
  }
}
