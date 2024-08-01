import { test } from "../qmTestBase";

test('can go to mainpage and check links', {
  tag: '@dummyTag'
}, async ({ qmMainPage, isMobile }) => {
  await qmMainPage.goto();
  await qmMainPage.headerLinksDoExist(isMobile);
});


