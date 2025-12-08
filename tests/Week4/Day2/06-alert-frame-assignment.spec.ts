import { test } from '@playwright/test';
test(`Automating Alert & Frame Integration`, async ({ page }) => {

    page.on(`dialog`, async dialog => {
        console.log(`Dialog message:`, dialog.message());
        await dialog.accept();
    });

    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`);
    const cmpFrame = page.frameLocator(`#fast-cmp-iframe`);
    await cmpFrame.getByRole(`button`, { name: `Accept` }).click();
    const frame = page.frameLocator(`#iframeResult`);
    await frame.getByRole(`button`, { name: `Try it` }).click();
    const resultText = await frame.locator(`#demo`).innerText();
    console.log(`The message is : ${resultText}`);
    await page.waitForTimeout(3000);

});