import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createContentAPI } from '../../src/api/content'
import { resolve } from 'path'
import * as fs from 'fs'

// Path to fixture directory
const FIXTURE_PATH = resolve(__dirname, '../fixtures/content')

describe('createContentAPI', () => {
  describe('/api/content GET endpoint', () => {
    beforeEach(() => {
      // Fixture files already exist in tests/fixtures/content/en/es directories
    })

    it('should return content with matching filenames when both files exist', () => {
      const req = { url: '/api/content', method: 'GET' } as any
      const res = { writeHead: vi.fn(), end: vi.fn() } as any
      const next = vi.fn()

      createContentAPI(FIXTURE_PATH).handler(req, res, next)

      expect(res.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'application/json' })
      const expectedContent = JSON.stringify([
        {
          id: 'content',
          en: 'English Title\n\nThis is English test content used for unit tests.',
          es: 'Título en Español\n\nEste es contenido de prueba en español para las pruebas unitarias.'
        },
        {
          id: 'example',
          en: 'Understanding the Dual Language Scroller',
          es: 'Entendiendo el Desplazador Bilingüe'
        }
      ])
      expect(res.end).toHaveBeenCalledWith(expect.stringContaining('English Title'))
      expect(res.end).toHaveBeenCalledWith(expect.stringContaining('Título en Español'))
      expect(res.end).toHaveBeenCalledWith(expect.stringContaining('Understanding the Dual Language Scroller'))
      expect(res.end).toHaveBeenCalledWith(expect.stringContaining('Entendiendo el Desplazador Bilingüe'))
    })

    it('should return array of content items when multiple files exist', () => {
      // Create temporary directory with multiple content files
      const tempDir = resolve(__dirname, '../fixtures/temp-multiple')
      const enDir = resolve(tempDir, 'en')
      const esDir = resolve(tempDir, 'es')
      
      fs.mkdirSync(enDir, { recursive: true })
      fs.mkdirSync(esDir, { recursive: true })
      fs.writeFileSync(resolve(enDir, 'content.txt'), 'English Title\n\nEnglish content')
      fs.writeFileSync(resolve(esDir, 'content.txt'), 'Título en Español\n\nContenido en español')
      fs.writeFileSync(resolve(enDir, 'example.txt'), 'Example English Title\n\nExample English content')
      fs.writeFileSync(resolve(esDir, 'example.txt'), 'Título de Ejemplo\n\nContenido de ejemplo')

      const req = { url: '/api/content', method: 'GET' } as any
      const res = { writeHead: vi.fn(), end: vi.fn() } as any
      const next = vi.fn()

      createContentAPI(tempDir).handler(req, res, next)

      expect(res.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'application/json' })
      expect(res.end).toHaveBeenCalledWith(JSON.stringify([
        {
          id: 'content',
          en: 'English Title\n\nEnglish content',
          es: 'Título en Español\n\nContenido en español'
        },
        {
          id: 'example',
          en: 'Example English Title\n\nExample English content',
          es: 'Título de Ejemplo\n\nContenido de ejemplo'
        }
      ]))

      // Cleanup temp directory
      fs.rmSync(tempDir, { recursive: true, force: true })
    })

    it('should skip incomplete file pairs', () => {
      // Create temporary directory with incomplete file pairs
      const tempDir = resolve(__dirname, '../fixtures/temp-incomplete')
      const enDir = resolve(tempDir, 'en')
      const esDir = resolve(tempDir, 'es')
      
      fs.mkdirSync(enDir, { recursive: true })
      fs.mkdirSync(esDir, { recursive: true })
      fs.writeFileSync(resolve(enDir, 'content.txt'), 'English Title\n\nEnglish content')
      fs.writeFileSync(resolve(esDir, 'content.txt'), 'Título en Español\n\nContenido en español')
      fs.writeFileSync(resolve(enDir, 'missing-es.txt'), 'English Title\n\nEnglish content')
      // Missing Spanish file for 'missing-es.txt'

      const req = { url: '/api/content', method: 'GET' } as any
      const res = { writeHead: vi.fn(), end: vi.fn() } as any
      const next = vi.fn()

      createContentAPI(tempDir).handler(req, res, next)

      expect(res.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'application/json' })
      expect(res.end).toHaveBeenCalledWith(JSON.stringify([
        {
          id: 'content',
          en: 'English Title\n\nEnglish content',
          es: 'Título en Español\n\nContenido en español'
        }
      ]))

      // Cleanup temp directory
      fs.rmSync(tempDir, { recursive: true, force: true })
    })

    it('should return 404 when files have different names', () => {
      // Create temporary directory with mismatched filenames
      const tempDir = resolve(__dirname, '../fixtures/temp-mismatch')
      const enDir = resolve(tempDir, 'en')
      const esDir = resolve(tempDir, 'es')
      
      fs.mkdirSync(enDir, { recursive: true })
      fs.mkdirSync(esDir, { recursive: true })
      fs.writeFileSync(resolve(enDir, 'different-en.txt'), 'English content')
      fs.writeFileSync(resolve(esDir, 'different-es.txt'), 'Spanish content')

      const req = { url: '/api/content', method: 'GET' } as any
      const res = { writeHead: vi.fn(), end: vi.fn() } as any
      const next = vi.fn()

      createContentAPI(tempDir).handler(req, res, next)

      expect(res.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'application/json' })
      expect(res.end).toHaveBeenCalledWith(JSON.stringify([]))

      // Cleanup temp directory
      fs.rmSync(tempDir, { recursive: true, force: true })
    })

    it('should return 404 when content files are missing', () => {
      const req = { url: '/api/content', method: 'GET' } as any
      const res = { writeHead: vi.fn(), end: vi.fn() } as any
      const next = vi.fn()

      createContentAPI('/nonexistent/path').handler(req, res, next)

      expect(res.writeHead).toHaveBeenCalledWith(404, { 'Content-Type': 'application/json' })
      expect(res.end).toHaveBeenCalledWith(JSON.stringify({ error: 'Failed to read content files' }))
    })

    it('should return 500 when file read fails due to permission errors', () => {
      // Create a directory that exists but has no content.txt files
      const tempDir = resolve(__dirname, '../fixtures/temp-empty')
      fs.mkdirSync(tempDir, { recursive: true })

      const req = { url: '/api/content', method: 'GET' } as any
      const res = { writeHead: vi.fn(), end: vi.fn() } as any
      const next = vi.fn()

      createContentAPI(tempDir).handler(req, res, next)

      expect(res.writeHead).toHaveBeenCalledWith(404, { 'Content-Type': 'application/json' })
      expect(res.end).toHaveBeenCalledWith(JSON.stringify({ error: 'Failed to read content files' }))

      // Cleanup temp directory
      fs.rmSync(tempDir, { recursive: true, force: true })
    })
  })

  describe('non-content routes', () => {
    it('should call next() for non-content routes', () => {
      const req = { url: '/api/other', method: 'GET' } as any
      const res = { writeHead: vi.fn(), end: vi.fn() } as any
      const next = vi.fn()

      createContentAPI(FIXTURE_PATH).handler(req, res, next)

      expect(next).toHaveBeenCalled()
      expect(res.writeHead).not.toHaveBeenCalled()
      expect(res.end).not.toHaveBeenCalled()
    })
  })
})