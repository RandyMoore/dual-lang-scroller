import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // Use 'list' reporter for terminal output (no browser popup)
  // Change to 'html' if you want a browser-based report
  reporter: 'list',
  timeout: 1000, // Global test execution timeout per test
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: false,
    timeout: 2000,
    stdout: 'ignore', // Ignore server output during tests to reduce noise
    stderr: 'pipe',
  },
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
});
