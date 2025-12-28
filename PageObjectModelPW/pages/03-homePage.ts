import { WelcomePage } from "./02-welcomePage";
import { locators } from "./locators";


export class HomePage extends WelcomePage {

    async clickLead() {
        await this.lppage.locator(locators.LeadMod).click()
    }

    async clickAccount() {
        await this.lppage.locator(`//a[text()='Accounts']`).click()
    }

    async clickCases() {
        await this.lppage.locator(`//a[text()='Cases']`).click()
    }

    async clickContacts() {
        await this.lppage.locator(`//a[text()='Contacts']`).click()
    }
}