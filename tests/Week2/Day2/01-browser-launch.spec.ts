import { chromium, test, webkit } from "@playwright/test";

test(`Test to launch a browser`, async () => {
    //browser
    //context
    //page
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const url = page.url();
    console.log(url);

    const browserInstance1 = await webkit.launch({ headless: false });
    const browserContext1 = await browserInstance1.newContext();
    const page1 = await browserContext1.newPage();
    await page1.goto("https://www.amazon.co.uk/");
    const url1 = page1.url();
    console.log(url1);

    const browserInstance2 = await chromium.launch({ headless: false, channel: "msedge" });
    const browserContext2 = await browserInstance2.newContext();
    const page2 = await browserContext2.newPage();
    await page2.goto("https://www.google.co.uk/");
    const url2 = page2.url();
    console.log(url2);
})