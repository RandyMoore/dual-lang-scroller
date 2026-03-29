import { readFileSync, existsSync, readdirSync } from 'fs'
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
    en: resolve(contentPath, 'en'),
    es: resolve(contentPath, 'es')
  }
}

export function createContentAPI(fixturePath?: string) {
  return {
    handler: (req: any, res: any, next: () => void) => {
      if (req.url === '/api/content' && req.method === 'GET') {
        try {
          const paths = getPaths(fixturePath)
          
          // Read all .txt files from both directories
          const enFiles = readdirSync(paths.en).filter(file => file.endsWith('.txt'))
          const esFiles = readdirSync(paths.es).filter(file => file.endsWith('.txt'))
          
          // Create a map of es files for quick lookup
          const esFileMap = new Map(
            esFiles.map(file => [basename(file, extname(file)), file])
          )
          
          // Build content items array
          const contentItems: ContentResponse[] = []
          
          for (const enFile of enFiles) {
            const enFileName = basename(enFile, extname(enFile))
            
            // Check if there's a matching Spanish file
            if (esFileMap.has(enFileName)) {
              const esFile = esFileMap.get(enFileName)!
              
              // Read both files
              const enContent = readFileSync(resolve(paths.en, enFile), 'utf-8')
              const esContent = readFileSync(resolve(paths.es, esFile), 'utf-8')
              
              contentItems.push({
                id: enFileName,
                en: enContent.trim(),
                es: esContent.trim()
              })
            }
          }
          
          // Return array of content items
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(contentItems))
        } catch (readError) {
          res.writeHead(404, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Failed to read content files' }))
        }
      }
      next()
    }
  }
}
