import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

  export default defineConfig({
    plugins: [vue()],
    test: {
      environment: 'happy-dom',
      restoreMocks: true,
      include: ['tests/unit/**/*.test.ts', 'tests/unit/**/*.spec.ts'],
      exclude: ['node_modules', 'dist', '.idea', '.git', '.cache', 'tests/e2e/**'],
    },
  })
