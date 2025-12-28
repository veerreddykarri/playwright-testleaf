import { HomePage } from "./03-homePage";


export class AccountPage extends HomePage {

    async clickCreateAccount() {
        await this.lppage.locator(`//a[text()="Create Account"]`).click()
    }

}