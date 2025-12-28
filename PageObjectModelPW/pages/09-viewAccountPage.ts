import { CreateAccountPage } from "./08-createAccountPage";


export class ViewAccountPage extends CreateAccountPage {

    async verifyAccountName() {
        const locator = this.lppage.locator(
            "//table[contains(@class,'fourColumnForm')]//span[normalize-space()='Account Name']/ancestor::td/following-sibling::td[1]/span[@class='tabletext']"
        );

        await locator.waitFor({ state: 'visible', timeout: 30000 });

        const rawText = await locator.innerText();
        console.log(rawText);
        const accountName = rawText.split('(')[0].trim();
        console.log(accountName);

    }
}