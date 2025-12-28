import { CreateLeadPage } from "./05-createLeadPage";


export class ViewLeadPage extends CreateLeadPage {

    async verifyFirstName() {
        const fName = await this.lppage.locator(`#viewLead_firstName_sp`).innerText()
        console.log(fName);

    }
}