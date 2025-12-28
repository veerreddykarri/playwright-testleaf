// Import required Playwright modules
// chromium  → launches the Chromium browser
// expect    → used for assertions (validation)
// Page      → TypeScript type for Playwright Page object
import { chromium, expect, Page } from '@playwright/test';

/**
 * LoginPage class
 * ----------------
 * This is a Page Object Model (POM) class.
 * All login page related actions are defined here.
 */
class LoginPage {

    // lppage holds the Playwright Page instance
    // This allows all methods in this class to interact with the browser page
    private lppage: Page;

    /**
     * Constructor
     * -----------
     * Runs automatically when the class is instantiated.
     * Receives the Playwright Page object and stores it for reuse.
     */
    constructor(page: Page) {
        this.lppage = page;
    }

    /**
     * loadUrl()
     * ----------
     * Navigates the browser to the login page.
     */
    async loadUrl(): Promise<void> {
        await this.lppage.goto('http://leaftaps.com/opentaps/control/main');
    }

    /**
     * enterCredentials()
     * ------------------
     * Enters username and password into the login form.
     * (Example selectors – update based on real application)
     */
    async enterCredentials(username: string, password: string): Promise<void> {
        // Fill username field
        await this.lppage.fill('#username', username);

        // Fill password field
        await this.lppage.fill('#password', password);
    }

    /**
     * clickLogin()
     * ------------
     * Clicks the Login / Submit button.
     */
    async clickLogin(): Promise<void> {
        await this.lppage.click('.decorativeSubmit');
    }

    /**
     * verifyTitle()
     * -------------
     * Waits for page load and validates the page title.
     */
    async verifyTitle(): Promise<void> {

        // Wait until the page load is fully complete
        await this.lppage.waitForLoadState('load');

        // Get the page title
        const title = await this.lppage.title();

        // Print title in console for debugging
        console.log('Page Title is:', title);

        // Assert the expected title
        expect(title).toBe('Leaftaps - TestLeaf Automation Platform');
    }

    /**
     * closeBrowser()
     * --------------
     * Closes the browser instance.
     */
    async closeBrowser(): Promise<void> {
        await this.lppage.context().browser()?.close();
    }
}

/**
 * doLogin()
 * ---------
 * This function controls the full test flow:
 * 1. Launch browser
 * 2. Create context and page
 * 3. Perform login steps
 * 4. Validate result
 * 5. Close browser
 */
async function doLogin(): Promise<void> {

    // Launch Chromium browser
    // headless: false → shows browser UI
    const browser = await chromium.launch({ headless: false });

    // Create a new isolated browser context
    const context = await browser.newContext();

    // Open a new browser tab
    const page = await context.newPage();

    // Create LoginPage object and inject Playwright page
    const loginPage = new LoginPage(page);

    // Step-by-step execution of login flow
    await loginPage.loadUrl();
    await loginPage.enterCredentials('demosalesmanager', 'crmsfa');
    await loginPage.clickLogin();
    await loginPage.verifyTitle();
    await loginPage.closeBrowser();
}

// Call the main function to execute the test
doLogin();
