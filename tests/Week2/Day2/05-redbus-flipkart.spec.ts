import { chromium, webkit, test } from "@playwright/test";

test(`RedBus in Edge & Flipkart in Webkit`, async () => {

    // -------- Launch Edge Browser --------
    // Start Microsoft Edge (Chromium-based) in visible mode
    const edgeBrowser = await chromium.launch({ headless: false, channel: `msedge` });

    // Create a new browser context (like a fresh browser window)
    const edgeContext = await edgeBrowser.newContext();

    // Open a new tab/page inside Edge
    const edgePage = await edgeContext.newPage();

    // Navigate to RedBus website
    await edgePage.goto(`https://www.redbus.in`);

    // Print the title and URL of the RedBus page
    console.log(`RedBus Title:`, await edgePage.title());
    console.log(`RedBus URL:`, edgePage.url());


    // -------- Launch WebKit Browser --------
    // Start WebKit browser (Safari engine) in visible mode
    const webkitBrowser = await webkit.launch({ headless: false });

    // Create a new browser context for WebKit
    const webkitContext = await webkitBrowser.newContext();

    // Open a new page inside WebKit
    const webkitPage = await webkitContext.newPage();

    // Navigate to Flipkart website
    await webkitPage.goto(`https://www.flipkart.com`);

    // Print the title and URL of the Flipkart page
    console.log(`Flipkart Title:`, await webkitPage.title());
    console.log(`Flipkart URL:`, webkitPage.url());


    // Close all browsers
    await edgeBrowser.close();
    await webkitBrowser.close();
});
