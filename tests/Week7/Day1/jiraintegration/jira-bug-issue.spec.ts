import { test, expect, chromium } from "@playwright/test";
import { logADefectInJira } from "./after-hooks-jira-tickets";

test(`Salesforce Login`, async ({ page }) => {

    // Go to Salesforce login page
    await page.goto("https://login.salesforce.com/");

    // Enter username
    await page.getByLabel("Username").fill("veerreddykarri700@agentforce.com");

    // Enter password
    await page.getByLabel("Password").fill("Kt903723");

    // Click login
    await page.getByRole("button", { name: "Log In" }).click();

    await page.getByRole('link', { name: 'Accounts' }).click();

    await page.waitForTimeout(3000);

});

test.afterEach(async ({},testInfo) => {
    console.log(testInfo.status);

    await logADefectInJira(testInfo);
})