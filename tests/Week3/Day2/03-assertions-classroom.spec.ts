import { chromium, expect, test, webkit } from "@playwright/test";

test(`Test to learn Assertions`, async ({ page }) => {

    await page.goto(`https://leafground.com/input.xhtml`);
    const disabledLocator = page.getByPlaceholder('Disabled');
    await expect(disabledLocator).toBeDisabled();

    const typeYourNameLocator = page.getByPlaceholder('Babu Manickam');
    await expect(typeYourNameLocator).toBeEditable();
    await page.getByPlaceholder('Babu Manickam').fill(`Veer Karri`);

    const textBoxLocator = page.locator('//input[@value="Chennai"]');
    await expect.soft(textBoxLocator).toBeDisabled();

    const textBoxLocator1 = page.locator('//input[@value="Chennai"]');
    textBoxLocator.fill("Playwright Learning")

    await page.waitForTimeout(3000);

})