import { LoginPage } from "./01-loginPage";
import { locators } from './locators';


export class WelcomePage extends LoginPage {

    async clickCRM() {

        await this.lppage.locator(locators.crmLink).click()
    }

    async clickLogout() {
        await this.lppage.locator(locators.login_logout).click()

    }
}