import { Locator, type Page } from '@playwright/test';
import { QmMainPage } from './qm_main.page';

export class QmKontaktPage extends QmMainPage {

    readonly page: Page;
    readonly isMobile: boolean;
    readonly txtName: Locator
    readonly txtKommentar: Locator
    readonly btnSenden: Locator
    readonly lblErrorMessageEMail: Locator

    constructor(page: Page, isMobile: boolean) {
      super(page);
      this.page = page;
      this.isMobile = isMobile;
      this.txtName = page.getByPlaceholder('Vorname');
      this.txtKommentar = page.getByPlaceholder('Kommentar');
      this.btnSenden = page.getByRole('button', {name: 'Senden'});
      this.lblErrorMessageEMail = page.locator('li').filter({ hasText: 'E-Mail Adresse' });
    }

    async goto() {
      await super.goto();
      if (this.isMobile){
        await this.clickMobileMenuBar();
      }
      await this.linkKontakt.click();
    }

}