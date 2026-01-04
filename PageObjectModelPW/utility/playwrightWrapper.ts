import { Page } from "@playwright/test";

export abstract class PWWrapper {
    lppage: Page;

    constructor(Tpage: Page) {
        this.lppage = Tpage;
    }

    async type(locator: string, inputData: string): Promise<void> {
        await this.lppage.fill(locator, inputData);
    }

}