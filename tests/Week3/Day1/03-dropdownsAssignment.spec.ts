import { chromium, test, webkit } from "@playwright/test";

test(`Test to learn Xpath locators selectors Assignment`, async ({ page }) => {

    await page.goto(`https://leafground.com/select.xhtml`);
    //  await page.selectOption('.ui-selectonemenu',{label:"Playwright"}); select option by label
    await page.selectOption('.ui-selectonemenu', { index: 2 });

    const options = page.locator('//select[@class="ui-selectonemenu"]/option');

    // Get the number of options
    const count = await options.count();
    console.log("Total options:", count);

    // Loop through each option and print the text value
    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).innerText();
        console.log(`Option ${i}: ${text}`);
    }




    await page.waitForTimeout(3000);

})