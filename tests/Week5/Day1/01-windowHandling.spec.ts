import { test } from "@playwright/test";

test(`Handling tabs using sequential way handling window`, async ({ context, page }) => {

    await page.goto(`https://www.flipkart.com/`);

    const searchBox = page.locator(`//input[@class='Pke_EE']`);

    await searchBox.fill(`Phone`);

    await searchBox.press(`Enter`);
    /* 
    What’s happening
        const newPage = context.waitForEvent(`page`);
    
        await page.locator(`//div[contains(text(),"MOTOROLA g35 5G")]`).click();
    
        const childPage = await newPage;
        
    You start listening for a new page event.
    You perform the click that opens a new tab.
    You await the event result.
    
    ⚠️ Risk with sequential approach
    If the click opens the tab very fast, there is a small chance:
    The tab opens before waitForEvent is fully registered
    → test becomes flaky.
    This approach works, but it’s not the safest.
    */
    const newPage = context.waitForEvent(`page`);

    await page.locator(`//div[contains(text(),"MOTOROLA g35 5G")]`).click();

    const childPage = await newPage;

    console.log(await page.title());

    console.log(await childPage.title());

    console.log(await childPage.locator(`//div[@class='hZ3P6w bnqy13']`).innerText());

    await page.bringToFront();

    await page.locator(`//span[contains(text(),"Electronics")]`).click();

    await page.waitForTimeout(3000);

});

test(`Handling tabs using concurrent way handling window`, async ({ context, page }) => {

    await page.goto(`https://www.flipkart.com/`);

    const searchBox = page.locator(`//input[@class='Pke_EE']`);

    await searchBox.fill(`Phone`);

    await searchBox.press(`Enter`);
    /**
    Promise.all ensures:
     const [childPage] = await Promise.all([
        context.waitForEvent(`page`),
        page.locator(`//div[contains(text(),"MOTOROLA g35 5G")]`).click()
    ]);
    Playwright listens for the event
    AND triggers the click
    at the same time
    No race condition
    This is the recommended Playwright pattern
    */
    const [childPage] = await Promise.all([
        context.waitForEvent(`page`),
        page.locator(`//div[contains(text(),"MOTOROLA g35 5G")]`).click()
    ]);

    await childPage.waitForLoadState("domcontentloaded");

    console.log(await page.title());

    console.log(await childPage.title());

    console.log(await childPage.locator(`//div[@class='hZ3P6w bnqy13']`).innerText());

    await page.bringToFront();

    await page.locator(`//span[contains(text(),"Electronics")]`).click();

    await page.waitForTimeout(3000);

});

test(`Handling Multiple windows`, async ({ context, page }) => {

    await page.goto(`https://leafground.com/window.xhtml`);

    await Promise.all([
        context.waitForEvent(`page`),
        page.getByText(`Open Multiple`).click()
    ]);
    const allPages = context.pages;
    allPages.length

    await page.waitForTimeout(3000);

});