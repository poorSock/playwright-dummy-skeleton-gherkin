import { Given, When, Then, expect } from "./qmTestBase";


Given('I am on the qm contact page', async ({ qmKontaktPage }) => {
    await qmKontaktPage.goto();
});

When('I try to send incomplete contact details', async ({ qmKontaktPage }) => {
    await qmKontaktPage.txtKommentar.fill('TestKommentar');
    await qmKontaktPage.txtName.fill('Testname');
    await expect(qmKontaktPage.lblErrorMessageEMail).not.toBeVisible();
    await qmKontaktPage.btnSenden.click();
});

Then('I see that the contact fields do exist', async ({ qmKontaktPage }) => {
    await expect(qmKontaktPage.txtName).toBeVisible();
    await expect(qmKontaktPage.txtKommentar).toBeVisible();
});

Then('I see the contact error message', async ({ qmKontaktPage }) => {
    await expect(qmKontaktPage.lblErrorMessageEMail).toBeVisible();
});