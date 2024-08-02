import { test, expect } from '@playwright/test';
import { PricingPage } from '../../../src/page-objects/pricing-page';

test.beforeEach(async ({ page }) => {
  await page.goto('pricing/');
});

test.describe('Cloud Academy - Verify pricing plans', () => {

  test('Verify a pricing plan and validate the form', async ({ page }) => {
    const pricingPage = new PricingPage(page);

    await pricingPage.clickAllowOnlyNecessaryCookies();

    await test.step('Navigate to the Pricing page', async () => {
      await expect(pricingPage.mainTitle).toBeVisible();
      await expect(await pricingPage.mainTitle.innerText()).toContain("Pricing and plans");
    });

    await test.step('Assert presence of pricing plans', async () => {
      await expect(pricingPage.sectionIndividuals).toBeVisible();
      await expect(pricingPage.sectionBusiness).toBeVisible();

      await pricingPage.sectionIndividuals.click()
      await expect(pricingPage.optionMonthly).toBeVisible();
      await expect(pricingPage.optionYearly).toBeVisible();

      await pricingPage.sectionBusiness.click()
      await expect(pricingPage.optionSmallTeams).toBeVisible();
      await expect(pricingPage.optionEnterprise).toBeVisible();
      await expect(pricingPage.optionVILT).toBeVisible();
    });

    await test.step('Enter the Small teams pricing plan detail', async () => {
      await pricingPage.buttonStartNow.click()
      await expect(page).toHaveURL(new RegExp('.*checkout-beta/self-serve/\\account.*'));
    });

    await test.step('Assert presence of form elements', async () => {
      await expect(pricingPage.inputFirstName).toBeVisible();
      await expect(pricingPage.inputLastName).toBeVisible();
      await expect(pricingPage.inputEmail).toBeVisible();
      await expect(pricingPage.inputPassword).toBeVisible();
      await expect(pricingPage.checkboxReCaptcha).toBeVisible();
      await expect(pricingPage.buttonSignup).toBeVisible();
    });
  });
});