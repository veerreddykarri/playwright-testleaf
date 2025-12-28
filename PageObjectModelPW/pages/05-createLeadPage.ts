import { LeadPage } from "./04-leadPage";


export class CreateLeadPage extends LeadPage {

    async enterMandatoryDetails() {

        await this.lppage.locator(`#createLeadForm_companyName`).fill('Jiya Technologies Ltd')
        await this.lppage.locator(`#createLeadForm_firstName`).fill('Veer')
        await this.lppage.locator(`#createLeadForm_lastName`).fill('Karri')
    }

    async clickSubmit() {
        await this.lppage.locator(`.smallSubmit`).click()
    }

}

