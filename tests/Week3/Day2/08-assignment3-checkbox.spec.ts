import { test, expect } from "@playwright/test";

test("Assignment 3 - CheckBox Components", async ({ page }) => {

    await page.goto("https://leafground.com/checkbox.xhtml");

    // Basic checkbox
    await page.locator("//span[text()='Basic']/preceding-sibling::div[contains(@class,'ui-chkbox-box')]").click();

    // Notification checkbox
    await page.locator("//span[text()='Ajax']/preceding-sibling::div[contains(@class,'ui-chkbox-box')]").click();

    // Verify Ajax message
    await expect(page.locator("//span[contains(@class,'ui-growl-title')]")).toHaveText("Checked");

    // Select favourite languages
    await page.locator("//label[text()='Java']/preceding-sibling::div//div[contains(@class,'ui-chkbox-box')]").click();
    await page.locator("//label[text()='Python']/preceding-sibling::div//div[contains(@class,'ui-chkbox-box')]").click();
    await page.locator("//label[text()='Javascript']/preceding-sibling::div//div[contains(@class,'ui-chkbox-box')]").click();
    await page.locator("//label[text()='C-Sharp']/preceding-sibling::div//div[contains(@class,'ui-chkbox-box')]").click();
    await page.locator("//label[text()='Others']/preceding-sibling::div//div[contains(@class,'ui-chkbox-box')]").click();


    // Tri state checkbox
    const tri = page
        .locator("//h5[text()='Tri State Checkbox']/following::div[contains(@class,'ui-chkbox-box')]")
        .first();
    await tri.click();
    await tri.click();
    await tri.click();

    // Toggle switch
    await page
        .locator("//h5[text()='Toggle Switch']/following::div[contains(@class,'ui-toggleswitch-slider')]")
        .first()
        .click();

    // Disabled checkbox
    await expect(page.getByLabel("Disabled")).toBeDisabled();


    // Multi select cities
    await page.locator("//div[@role='combobox' and contains(@id,'multiple')]").click();
    await page.locator("//li/label[text()='Rome']").click();
    await page.locator("//li/label[text()='Paris']").click();
    await page.locator("//li/label[text()='Amsterdam']").click();

    // Close multi select panel
    await page.locator("//a[contains(@class,'ui-selectcheckboxmenu-close')]").click();
});
