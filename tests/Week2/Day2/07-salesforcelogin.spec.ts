import { test, expect, chromium } from "@playwright/test";

test(`Salesforce Login`, async () => {

  // Launch Chrome in headed mode
  const browser = await chromium.launch({ headless: false, channel: "chrome" });

  // Create new browser context
  const context = await browser.newContext();

  // Open a fresh tab
  const page = await context.newPage();

  // Go to Salesforce login page
  await page.goto("https://login.salesforce.com/");

  // Enter username
  await page.getByLabel("Username").fill("veerreddykarri700@agentforce.com");

  // Enter password
  await page.getByLabel("Password").fill("Kt903723.");

  // Click login
  await page.getByRole("button", { name: "Log In" }).click();

  // ⏳ Wait for you to complete MFA manually  
  console.log("👉 Complete MFA in the browser...");
  await page.waitForTimeout(120000); // 2 minutes is enough

  // ⭐ Save the logged-in session for future tests
  await context.storageState({
    path: "Data/salesforceLogin.json"
  });

  console.log("✅ Session saved to Data/salesforceLogin.json");

  await browser.close();
});