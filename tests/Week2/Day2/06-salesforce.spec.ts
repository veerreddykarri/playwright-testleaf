import { test, expect, chromium } from "@playwright/test";

test(`Assignment 3: Create a new account`, async () => {

    // launching chrome browser in headed mode
    const browserInstance = await chromium.launch({ headless: false, channel: `chrome` });

    // creating a new browser context
    const browserContext = await browserInstance.newContext();

    // opening a fresh page/tab
    const page = await browserContext.newPage();

    // going to salesforce login page
    await page.goto(`https://login.salesforce.com/`);

    // typing the username
    await page.getByLabel(`username`).fill(`veerreddykarri700@agentforce.com`);

    // typing the password
    await page.getByLabel(`password`).fill(`Kt903723.`);

    // clicking the login button
    await page.getByRole(`button`, { name: `Log In` }).click();

    // Test Can't continue due to MFA
    await page.waitForTimeout(1200000);
    await page.context().storageState({path:"Data/salesforceLogin.json"})

    // checking if it reached lightning page
    await expect(page).toHaveURL(`/lightning/`);
    await expect(page).toHaveTitle(`Lightning Experience | Salesforce`);

    // clicking the waffle icon (app launcher)
    await page.locator(".slds-icon-waffle").click();

    // clicking the "View All" button
    await page.getByText("View All").click();

    // searching for Service app
    await page.getByPlaceholder("Search apps or items...").fill("Service");

    // clicking on the Service result first one
    await page.locator("(//mark[text()='Service'])[1]").click();

    // clicking on Accounts link
    await page.locator("a[title='Accounts']").click();

    // pressing the New button
    await page.getByRole("button", { name: "New" }).click();

    // typing the account name
    await page.locator("input[name='Name']").fill("Automation Test Account");

    // clicking Save button
    await page.locator("//button[@name='SaveEdit']").click();

    // checking if the toast message came after saving
    const toast = page.locator("span.toastMessage");
    await expect(toast).toBeVisible();
    await expect(toast).toContainText("was created");
});
