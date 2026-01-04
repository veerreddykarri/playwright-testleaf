import { test as baseT} from "@playwright/test";

//normal test keyword has page fixture but a custom fixture will have extended features of existing fixtures
export const test = baseT.extend({

    page: async ({ browser }, use) => {
        const page = await browser.newPage();
        await page.goto("https://leaftaps.com/opentaps/control/main");
        await page.locator("#username").fill("Demosalesmanager");
        await page.locator("#password").fill("crmsfa");
        await page.locator(".decorativeSubmit").click();
        await use(page); //use is a callback function which will execute the test
        await page.close();
    }
});