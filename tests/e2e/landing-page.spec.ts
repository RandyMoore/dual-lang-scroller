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
    
    // Verify the item has the correct id
    const firstItem = contentItems.first();
    await expect(firstItem).toContainText('content');
    
    // Verify EN and ES content are displayed
    const enContent = firstItem.locator('.content-en');
    const esContent = firstItem.locator('.content-es');
    
    await expect(enContent).toBeVisible();
    await expect(esContent).toBeVisible();
    
    // Verify EN content contains expected text (first line)
    await expect(enContent).toContainText('This is sample English content for the dual-language scroller application.');
    
    // Verify ES content contains expected text (first line)
    await expect(esContent).toContainText('Este es el contenido de muestra en español para la aplicación de desplazamiento bilingüe.');
  });
});
