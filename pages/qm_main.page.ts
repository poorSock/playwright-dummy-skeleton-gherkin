import { expect, Locator, type Page } from '@playwright/test';

export class QmMainPage {

    readonly page: Page;
    readonly mobileBurgerMenu: Locator
    readonly linkPortfolio: Locator
    readonly linkKontakt: Locator
    readonly btnDeclineCookies: Locator

    constructor(page: Page) {
        this.page = page;
        this.mobileBurgerMenu = page.locator('[class=mobile_menu_bar]').first();
        this.linkPortfolio = page.getByRole('link', {name: 'PORTFOLIO'});
        this.linkKontakt = page.getByRole('link', {name: 'KONTAKT', exact: true});
        this.btnDeclineCookies = page.getByRole('button', {name: 'Ablehnen'});
      }

      async goto() {
        await this.page.goto('https://www.qualityminds.de');
        await this.btnDeclineCookies.click();
      }

      async headerLinksDoExist(isMobile){
        if (isMobile){
          await this.clickMobileMenuBar();
        }
        await expect(this.linkPortfolio).toBeVisible();
        await expect(this.linkKontakt).toBeVisible();
      }

      protected async clickMobileMenuBar(){
        await this.mobileBurgerMenu.evaluate((element: HTMLElement) => element.click());
      }
}