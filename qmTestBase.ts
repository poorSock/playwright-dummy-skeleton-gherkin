import { test as base, expect } from '@playwright/test';
import { QmMainPage } from './pages/qm_main.page';
import { QmKontaktPage } from './pages/qm_kontakt.page';

// Declare the types of your fixtures.
type PageFixtures = {
  qmMainPage: QmMainPage;
  qmKontaktPage: QmKontaktPage;
};

// Extend base test by providing my Pages
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<PageFixtures>({
    qmMainPage: async ({ page }, use) => {
        await use(new QmMainPage(page));
    },
    qmKontaktPage: async ({ page, isMobile}, use) => {
        await use(new QmKontaktPage(page, isMobile));
    }
});

export { expect } from '@playwright/test';