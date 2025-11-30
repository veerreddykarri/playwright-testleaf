import { chromium, expect, test } from "@playwright/test";

test(`Assignment: 1 Create a Lead`, async () => {

    // Launch browser instance (Chrome UI mode)
    const browserInstance = await chromium.launch({ headless: false, channel: `chrome` });
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();

    // Navigate to Login Page
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    // Login
    await page.locator(`#username`).fill(`demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();

    // Click CRM/SFA link
    await page.locator(`#label`).click();

    // Navigate: Leads > Create Lead
    const leadsTab = page.getByRole(`link`, { name: `Leads` });
    await leadsTab.click();

    const createLead = page.getByRole(`link`, { name: `Create Lead` });
    await createLead.click();

    // Fill Lead Form
    await page.locator(`#createLeadForm_companyName`).fill(`Jiya Technologies Ltd`);
    await page.locator(`#createLeadForm_firstName`).fill(`Veer`);
    await page.locator(`#createLeadForm_lastName`).fill(`Karri`);
    await page.locator(`#createLeadForm_personalTitle`).fill(`Mr`);
    await page.locator(`#createLeadForm_generalProfTitle`).fill(`Director`);
    await page.locator(`#createLeadForm_annualRevenue`).fill(`10000`);
    await page.locator(`#createLeadForm_departmentName`).fill(`Materials Department`);
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(`07590489631`);

    // Submit the Create Lead form
    await page.getByRole(`button`, { name: `Create Lead` }).click();

    // Extract created Lead details
    const company = await page.locator(`#viewLead_companyName_sp`).textContent();
    const firstName = await page.locator(`#viewLead_firstName_sp`).textContent();
    const lastName = await page.locator(`#viewLead_lastName_sp`).textContent();
    const status = await page.locator(`#viewLead_statusId_sp`).textContent();

    // Assertions
    expect(company).toContain(`Jiya Technologies Ltd`);
    expect(firstName).toBe(`Veer`);
    expect(lastName).toBe(`Karri`);
    expect(status).toBe(`Assigned`);

    //Page Title
    const title = await page.title();
    console.log(title);

    // Optional wait to view UI
    await page.waitForTimeout(3000);
});