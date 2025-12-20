import { test, expect } from '@playwright/test';

test('Salesforce login setup', async ({ page }) => {

  await page.goto('https://login.salesforce.com/');

  await page.getByLabel('Username').fill('veerreddykarri700@agentforce.com');
  await page.getByLabel('Password').fill('Kt903723.');

  await page.getByRole('button', { name: 'Log In' }).click();

  await page.waitForURL(/\/lightning\//);
  await expect(page.locator('.slds-icon-waffle')).toBeVisible();

  await page.context().storageState({
    path: 'Data/salesforceLogin.json'
  });

  await page.waitForTimeout(120000);
});
