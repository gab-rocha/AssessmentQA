import { test, expect } from '@playwright/test';
import { LibraryPage } from '../../../src/page-objects/library-page';


test.beforeEach(async ({ page }) => {
  await page.goto('library/');
});

test.describe('Cloud Academy - testing library features', () => {

  test('Search for a course on the Training Library page', async ({ page }) => {
    const libraryPage = new LibraryPage(page);

    await libraryPage.clickAllowOnlyNecessaryCookies();

    await test.step('Navigate to the Library page', async () => {
      await expect(libraryPage.mainTitle).toBeVisible();
      await expect(await libraryPage.mainTitle.innerText()).toContain("Training Library");
    });

    const courses = ['AWS', 'GCP', 'Azure'];

    for (const course of courses) {

      await test.step('Search for the course in the search field', async () => {
        await expect(libraryPage.searchInput).toBeVisible();

        await libraryPage.searchInput.clear();
        await libraryPage.searchInput.fill(course);
        await libraryPage.clickCourseSuggestion(course);

        await expect(page).toHaveURL(new RegExp('.*search/\\?q=.*'));
      });

      await test.step('Verify that the search display value in the results', async () => {

        await expect(page).toHaveURL(new RegExp('.*?q=' + course));
        await expect(libraryPage.resultsCounter).toBeVisible();
        await expect(libraryPage.sectionContent).toBeVisible();
      });
    }
  });
});