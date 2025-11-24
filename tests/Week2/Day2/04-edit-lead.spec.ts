import { test, expect, chromium } from "@playwright/test";

test(`Assignment 2: Edit a Lead`, async () => {

    // Launch Chrome browser
    const browserInstance = await chromium.launch({ headless: false, channel: `chrome` });
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();

    // Open application URL
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    // Login
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();

    // Navigate to CRM/SFA
    await page.locator(`#label`).click();

    // Go to Leads section
    await page.getByRole(`link`, { name: `Leads` }).click();

    // Open Find Leads page
    await page.getByRole(`link`, { name: `Find Leads` }).click();

    // Enter first name to search
    await page.getByRole(`textbox`, { name: `First name:` }).fill(`Veer`);

    // Click Find Leads button
    await page.getByRole(`button`, { name: `Find Leads` }).click();
    await page.waitForTimeout(2000);  // wait for results

    // Click the first lead from the search results
    const firstLead = page.locator(`//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a`).first();
    await firstLead.click();

    // Click Edit button
    await page.getByRole(`link`, { name: `Edit` }).click();

    // Update company name
    await page.locator(`#updateLeadForm_companyName`).fill(`Jiya Tech Updated`);

    // Update annual revenue
    await page.locator(`#updateLeadForm_annualRevenue`).fill(`50000`);

    // Update department
    await page.locator(`#updateLeadForm_departmentName`).fill(`Updated Department`);

    // Add description
    await page.locator(`#updateLeadForm_description`).fill(`Lead details updated through Playwright.`);

    // Click Update button
    await page.getByRole(`button`, { name: `Update` }).click();

    // Verify company name
    await expect(page.locator(`#viewLead_companyName_sp`))
        .toContainText(`Jiya Tech Updated`);

    // Verify annual revenue with formatted value
    const revenueText = await page.locator('#viewLead_annualRevenue_sp').innerText();
    const numericRevenue = revenueText.match(/\d{1,3}(?:,\d{3})*/)?.[0].replace(/,/g, "");
    expect(numericRevenue).toBe(`50000`);

    // Verify department
    await expect(page.locator(`#viewLead_departmentName_sp`))
        .toHaveText(`Updated Department`);

    // Verify description
    await expect(page.locator(`#viewLead_description_sp`))
        .toHaveText(`Lead details updated through Playwright.`);

    // Print the title of the page
    const title = await page.title();
    console.log(`Page Title:`, title);
});
