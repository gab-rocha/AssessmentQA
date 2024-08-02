import { Page } from '@playwright/test';

export abstract class PageModel {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //Cookies
  private get allowOnlyNecessaryCookies() {
    return this.page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll');
  }

  async clickAllowOnlyNecessaryCookies() {
    return await this.allowOnlyNecessaryCookies.click()
  }
}