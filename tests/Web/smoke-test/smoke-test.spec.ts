import { test, expect } from '@playwright/test';
import { HomePage } from '../../../src/page-objects/home-page';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Smoke Test', () => {
  test('verify menu logo', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(await homePage.logoBox).toBeVisible();
  });
});