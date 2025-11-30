import { chromium, test, webkit } from "@playwright/test";

test(`Test to learn CSS `, async () => {

    const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();

    await page.waitForTimeout(3000);

})