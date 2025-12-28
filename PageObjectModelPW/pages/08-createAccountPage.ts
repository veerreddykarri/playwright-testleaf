import { AccountPage } from "./07-accountPage";


export class CreateAccountPage extends AccountPage {

    async enterMandatoryDetails() {

        await this.lppage.locator(`#accountName`).fill(`Jiya Technologies Ltd ${Date.now()}`)
    }

    async clickSubmit() {
        await this.lppage.locator(`.smallSubmit`).click()
    }

}

