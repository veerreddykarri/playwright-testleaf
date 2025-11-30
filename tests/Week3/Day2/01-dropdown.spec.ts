import { chromium, test, webkit } from "@playwright/test";

test(`Test to learn Dropdowns`, async ({ page }) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
    await page.locator(`//label[text()='Password']/following-sibling::input`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.locator(`//a[contains(text(),"Leads")]`).click();

    await page.locator(`//a[contains(text(),"Create Lead")]`).click();

    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(`Jiya Technologies Ltd`);
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Veer`);
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`Karri`);
    await page.selectOption("#createLeadForm_dataSourceId", { value: "LEAD_DIRECTMAIL" });
    const dropdown = await page.locator(`#createLeadForm_dataSourceId>option`);
    const dropdownCount = await dropdown.count();
    console.log(`The Options in the dropdown are ${dropdownCount}`);

    for (let index = 0; index < dropdownCount; index++) {
        console.log(await dropdown.nth(index).innerText())
    }

    await page.selectOption("#createLeadForm_marketingCampaignId", { index: 3 });
    await page.selectOption("#createLeadForm_industryEnumId", { label: "Computer Software" });
    await page.selectOption("#createLeadForm_currencyUomId", { value: "INR" });
    await page.locator(`//input[@class='smallSubmit']`).click();
    


    await page.waitForTimeout(3000);

})