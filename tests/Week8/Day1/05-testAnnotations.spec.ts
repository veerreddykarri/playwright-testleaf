import { test } from "@playwright/test";

// test.describe(`Test Annotation`,async () => {
    
// test.skip(`Test Annotation with skip cause test not suitable for the environment`,async ({page}) => { // page fixture

//    await page.goto(`http://leaftaps.com/opentaps/control/main`)

//   await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`); 

//   await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

//   await page.locator(`//input[@class="decorativeSubmit"]`).click();

//   await page.locator(`//a[contains(text(),"CRM")]`).click()

//     await page.waitForTimeout(3000)
// })

// test.fixme(`Test annoatation with fixme is to convey that there is an issue in the script that has to be fixed`,async ({page}) => { // page fixture

//    await page.goto(`http://leaftaps.com/opentaps/control/main`)

//   await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`); 

//   await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

//   await page.locator(`//input[@class="decorativeSubmit"]`).click();

//   await page.locator(`//a[contains(text(),"CRM")]`).click()

//     await page.waitForTimeout(3000)
// })


// test.fail(`Unable to click the submit login`,async ({page}) => { // page fixture

//    await page.goto(`http://leaftaps.com/opentaps/control/main`)

//   await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`); 

//   await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

//   await page.locator(`//input[@class="decorativeSubm"]`).click();

//   await page.locator(`//a[contains(text(),"CRM")]`).click()

//     await page.waitForTimeout(3000)
// })


test(`Slow test increase timeout`,async ({page}) => {

 test.slow();

  await page.goto(`http://leaftaps.com/opentaps/control/main`)

  await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`); 

  await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

  await page.locator(`//input[@class="decorativeSubm"]`).click();

  await page.locator(`//a[contains(text(),"CRM")]`).click()

    await page.waitForTimeout(3000)
    
})