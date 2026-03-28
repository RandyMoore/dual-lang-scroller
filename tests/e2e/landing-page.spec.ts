import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should load the landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Dual-Language Scroller/);
  });

  test('should display content list', async ({ page }) => {
    await page.goto('/');
    
    // Verify content list is displayed
    const contentList = page.locator('.content-list');
    await expect(contentList).toBeVisible();
    
    // Verify content count is correct (1 item with id 'content')
    const contentItems = page.locator('.content-item');
    await expect(contentItems).toHaveCount(1);
    
    // Verify EN and ES content are displayed in each item
    const firstItem = contentItems.first();
    
    // Verify EN content contains expected text (first line)
    await expect(firstItem.locator('.content-en')).toContainText('English Title');
    
    // Verify ES content contains expected text (first line)
    await expect(firstItem.locator('.content-es')).toContainText('Titulo Español');
  });
});
