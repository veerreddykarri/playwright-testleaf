
import test, { chromium, expect, Page } from '@playwright/test';

class salesforceLogin {


    private salesforcelogin: Page;

    constructor(page: Page) {
        this.salesforcelogin = page;
    }

    async loadUrl(): Promise<void> {
        await this.salesforcelogin.goto('https://login.salesforce.com/');
    }

    async enterCredentials(username: string, password: string): Promise<void> {
        await this.salesforcelogin.getByLabel('Username').fill(username);
        await this.salesforcelogin.getByLabel('Password').fill(password);
    }


    async clickLogin(): Promise<void> {
        await this.salesforcelogin.getByRole('button', { name: 'Log In' }).click();
    }

    async verifyTitle(): Promise<void> {

        await this.salesforcelogin.waitForLoadState('domcontentloaded');

        const title = await this.salesforcelogin.title();

        console.log('Page Title is:', title);

        expect(title).toBe('');
    }

    async closeBrowser(): Promise<void> {
        await this.salesforcelogin.context().browser()?.close();
    }
}


async function doSalesforcelogin(): Promise<void> {

    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    const page = await context.newPage();

    const salesforceLoginPage = new salesforceLogin(page);

    await salesforceLoginPage.loadUrl();
    await salesforceLoginPage.enterCredentials('dilipkumar.rajendran@testleaf.com', 'TestLeaf@2025');
    await salesforceLoginPage.clickLogin();
    await salesforceLoginPage.verifyTitle();
    await salesforceLoginPage.closeBrowser();
}

doSalesforcelogin();