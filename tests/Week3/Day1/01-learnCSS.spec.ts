import { chromium, test, webkit } from "@playwright/test";

test(`Test to learn CSS Selectors`, async ({page}) => { // {page} fixure: no need to declare below commented code (inbuilt)

    /*const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();*/

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`input`).nth(0).fill(`demosalesmanager`);
    await page.locator(`input`).nth(1).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();

    await page.waitForTimeout(3000);

})