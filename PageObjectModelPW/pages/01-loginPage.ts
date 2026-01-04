
import { chromium, expect, Page } from '@playwright/test';
import { locators } from './locators';
import { PWWrapper } from '../utility/playwrightWrapper';

export class LoginPage extends PWWrapper {

    async loadUrl(url: string): Promise<void> {
        await this.lppage.goto(url);
    }


    async enterCredentials(username: string, password: string): Promise<void> {
        // await this.lppage.fill(locators.usernameField, username);
        // await this.lppage.fill(locators.PwdField, password);
        await this.type(locators.usernameField, username);
        await this.type(locators.PwdField, password);
    }

    async clickLogin(): Promise<void> {
        await this.lppage.click(locators.login_logout);
    }


    async verifyTitle(): Promise<void> {

        await this.lppage.waitForLoadState('load');

        const title = await this.lppage.title();

        console.log('Page Title is:', title);

        expect(title).toBe('Leaftaps - TestLeaf Automation Platform');
    }

    async closeBrowser(): Promise<void> {
        await this.lppage.context().browser()?.close();
    }
}