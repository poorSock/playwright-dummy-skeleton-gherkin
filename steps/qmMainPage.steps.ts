import { Given, When, Then } from "./qmTestBase";


Given('I am on the QM homepage', async ({ qmMainPage }) => {
    await qmMainPage.goto();
});

When('I check all sub page links', async ({}) => {
    console.log('Checking all the links...');
});

Then('I see that all links lead to the corect sub pages', async ({ qmMainPage, isMobile }) => {
    await qmMainPage.headerLinksDoExist(isMobile);
});