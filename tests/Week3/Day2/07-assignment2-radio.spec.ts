import { test, expect } from "@playwright/test";

test("Assignment 2 - Radio Buttons", async ({ page }) => {

    await page.goto("https://leafground.com/radio.xhtml");

    // Favourite Browser
    await page.locator(`//label[text()='Edge']`).nth(0).check();
    await expect(page.locator(`//label[text()='Edge']`).nth(0)).toBeChecked();

    // UnSelectable
    await page.locator(`//label[text()='Chennai']`).nth(0).check();
    await expect(page.locator(`//label[text()='Chennai']`).nth(0)).toBeChecked();

    // Default selected
    await expect(page.locator(`//label[text()='Safari']`).nth(1)).toBeChecked();

    // Age group
    const age4160 = page.locator(`//label[text()='41-60 Years']`).nth(0);
    if (!(await age4160.isChecked())) {
        await age4160.check();
    }
    await expect(age4160).toBeChecked();
});
