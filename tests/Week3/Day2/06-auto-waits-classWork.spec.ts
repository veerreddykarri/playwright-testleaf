import { test, expect } from "@playwright/test";

test("Assignment 1 - Waits Page", async ({ page }) => {

  await page.goto("https://leafground.com/waits.xhtml");

  // Visibility
  await page.getByRole("button", { name: "Click" }).first().click();
  await expect(page.getByRole("button", { name: "I am here" })).toBeVisible();

  // Invisibility
  await page.getByRole("button", { name: "Click" }).nth(1).click();
  await expect(page.getByRole("button", { name: "I am about to hide" })).toBeHidden({ timeout: 15000 });

  // Clickability
  await page.getByRole("button", { name: "Click First Button" }).click();
  const secondBtn = page.getByRole("button", { name: "Click Second" });
  await expect(secondBtn).toBeEnabled({ timeout: 15000 });
  await secondBtn.click();

  // Text Change
  await page.locator("(//span[text()='Click']/parent::button)[3]").click();
  await expect(page.getByRole("button", { name: "Did you notice?" }))
    .toBeVisible({ timeout: 15000 });

});
