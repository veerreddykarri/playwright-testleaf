import { test } from "@playwright/test";
test(`Learn to use playwright locators`, async ({ page }) => {

    await page.goto(`https://login.salesforce.com/`);

    //    await page.getByRole("textbox", { name: "Username" }).fill("veerreddykarri700@agentforce.com")

    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")

    await page.getByRole("textbox", { name: "Password" }).fill("TestLeaf@2025");

    await page.getByRole("button", { name: "Log In" }).click();

    await page.getByTitle("App Launcher",{exact:true}).click();

    await page.getByText("View All",{exact:true}).click();

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service");

    await page.waitForTimeout(6000);
});