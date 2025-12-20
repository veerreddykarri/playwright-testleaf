import { test, expect, Locator, Page } from '@playwright/test';
import path from 'path';

test.use({ storageState: 'Data/salesforceLogin.json' });


test('Salesforce login setup', async ({ page }) => {

    await page.goto(
        'https://orgfarm-2d9a0f3f06-dev-ed.develop.lightning.force.com/lightning/page/home'
    );

    await page.getByRole('link', { name: 'Accounts' }).click();
    await page.getByRole('button', { name: 'New' }).click();

    const accountName = `Automation Test Account ${Date.now()}`;
    const dialog = page.getByRole('dialog', { name: /New Account/i });

    await dialog.getByRole('textbox', { name: 'Account Name' }).fill(accountName);

    await dialog.getByRole('combobox', { name: 'Rating' }).click();
    await page.locator(`//lightning-base-combobox-item[@role='option' and @data-value='Warm']`).click();
    await dialog.locator(`//button[@role='combobox' and @aria-label='Type']`).click();
    await page.getByRole('option', { name: 'Prospect' }).click();
    await dialog.getByRole('combobox', { name: 'Ownership' }).click();
    await page.getByRole('option', { name: 'Public' }).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    const filePath = path.join(__dirname, 'TestData', 'TestLeaf Logo.png');
    await page.getByRole('button', { name: 'Upload Files', exact: true }).click();

    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(filePath);

    await page.getByRole('button', { name: 'Done' }).click();
});
