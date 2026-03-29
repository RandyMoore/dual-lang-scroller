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
    
    // Verify content count is correct (2 items: 'content' and 'example')
    const contentItems = page.locator('.content-item');
    await expect(contentItems).toHaveCount(2);
    
    // Verify EN content for first item contains expected text (first line from content.txt)
    const firstItem = contentItems.first();
    await expect(firstItem.locator('.content-en')).toContainText('English Title');
    
    // Verify ES content for first item contains expected text (first line from content.txt)
    await expect(firstItem.locator('.content-es')).toContainText('Título en Español');
    
    // Verify EN content for second item contains expected text (first line from example.txt)
    const secondItem = contentItems.nth(1);
    await expect(secondItem.locator('.content-en')).toContainText('Understanding the Dual Language Scroller');
    
    // Verify ES content for second item contains expected text (first line from example.txt)
    await expect(secondItem.locator('.content-es')).toContainText('Entendiendo el Desplazador Bilingüe');
  });

  test('should navigate to viewer when clicking on content item', async ({ page }) => {
    await page.goto('/');
    
    // Click on the first content item
    const contentItem = page.locator('.content-item').first();
    await contentItem.click();
    
    // Verify navigation to /viewer/content (string ID)
    await expect(page).toHaveURL(/\/viewer\/content/);
  });

  test('should navigate to correct viewer with correct ID when clicking on specific item', async ({ page }) => {
    await page.goto('/');
    
    // Get the first content item's EN text to use as identifier
    const firstItem = page.locator('.content-item').first();
    const enText = await firstItem.locator('.content-en').textContent();
    
    // Click on the content item
    await firstItem.click();
    
    // Verify we're now on the viewer page with correct ID
    await expect(page).toHaveURL(/\/viewer\/content/);
    
    // Navigate back to landing and verify navigation works for specific items
    await page.goto('/');
    
    // Click again and verify the URL contains the expected ID pattern
    const item = page.locator('.content-item').first();
    await item.click();
    await expect(page).toHaveURL(/\/viewer\/content/);
  });

  test('should display only first line of content on landing page', async ({ page }) => {
    await page.goto('/');
    
    // Get the first content item
    const firstItem = page.locator('.content-item').first();
    
    // Verify EN content contains only the first line (title from content.txt)
    const enContent = await firstItem.locator('.content-en').textContent();
    expect(enContent).toContain('English Title');
    expect(enContent).not.toContain('It demonstrates how plain text content should be structured');
    
    // Verify ES content contains only the first line (title from content.txt)
    const esContent = await firstItem.locator('.content-es').textContent();
    expect(esContent).toContain('Título en Español');
    expect(esContent).not.toContain('Muestra cómo el contenido de texto plano debe estructurarse');
  });

  test('should display correct content when navigating to viewer with content ID', async ({ page }) => {
    await page.goto('/viewer/content');
    
    // Verify the viewer page loaded
    await expect(page).toHaveTitle(/Dual-Language Scroller/);
    
    // Verify both frames are visible
    const frameContainer = page.locator('.frame-container');
    await expect(frameContainer).toBeVisible();
    
    // Verify both frames have content
    const frame1 = page.locator('.frame-content').first();
    const frame2 = page.locator('.frame-content').nth(1);
    await expect(frame1).toBeVisible();
    await expect(frame2).toBeVisible();
    
    // Verify content is loaded and contains expected text for content.txt
    const frame1Content = await frame1.textContent();
    const frame2Content = await frame2.textContent();
    expect(frame1Content).toContain('English Title');
    expect(frame2Content).toContain('Título en Español');
  });

  test('should display correct content when navigating to viewer with example ID', async ({ page }) => {
    await page.goto('/viewer/example');
    
    // Verify the viewer page loaded
    await expect(page).toHaveTitle(/Dual-Language Scroller/);
    
    // Verify both frames are visible
    const frameContainer = page.locator('.frame-container');
    await expect(frameContainer).toBeVisible();
    
    // Verify both frames have content
    const frame1 = page.locator('.frame-content').first();
    const frame2 = page.locator('.frame-content').nth(1);
    await expect(frame1).toBeVisible();
    await expect(frame2).toBeVisible();
    
    // Verify content is loaded and contains expected text for example.txt
    const frame1Content = await frame1.textContent();
    const frame2Content = await frame2.textContent();
    expect(frame1Content).toContain('Understanding the Dual Language Scroller');
    expect(frame2Content).toContain('Entendiendo el Desplazador Bilingüe');
  });
});
