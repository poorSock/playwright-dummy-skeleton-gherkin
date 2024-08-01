import { test, expect } from "../qmTestBase";

test.describe('kontakt page tests', async () => {
  test.beforeEach('go to kontakt page', async ({qmKontaktPage}) => {
    await qmKontaktPage.goto();
  })

  test('txt fields do exist (Dummy um Annotations zu demonstrieren)', {
    tag: '@dummyTag'
  }, async ({ qmKontaktPage }) => {
    await expect(qmKontaktPage.txtKommentar).toBeVisible();
    await expect(qmKontaktPage.txtKommentar).toBeVisible();
  });

  test('can go to contact page and read error messages', async ({ qmKontaktPage }) => {
    await qmKontaktPage.txtKommentar.fill('TestKommentar');
    await qmKontaktPage.txtName.fill('Testname');
    await expect(qmKontaktPage.lblErrorMessageEMail).not.toBeVisible();
    await qmKontaktPage.btnSenden.click();
    await expect(qmKontaktPage.lblErrorMessageEMail).toBeVisible();
  });
});



