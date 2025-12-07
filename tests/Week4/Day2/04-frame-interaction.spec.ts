import { test } from "@playwright/test";
test(`Learn frame interaction`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);

    const frameURL = page.frame({ url: "https://leafground.com/default.xhtml" });

    await frameURL?.locator(`#Click`).click();

    await page.waitForTimeout(3000);
});

test(`Learn frame interaction using Name`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);

    const frameName = page.frame({ name: "frame2" });

    await frameName?.locator(`#Click`).click();

    await page.waitForTimeout(3000);
});

test(`Learn frame interaction using Frame Locator`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);

    const frameRef = page.frameLocator(`[src="default.xhtml"]`);

    await frameRef.locator(`#Click`).click();

    await page.waitForTimeout(3000);
});

test(`Learn interacting with Nested Frame`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);

    const frame_outerframe = page.frameLocator(`[src="page.xhtml"]`);

    const frame_innerframe = frame_outerframe.frameLocator(`#frame2`);

    await frame_innerframe.locator(`#Click`).click();

    await page.waitForTimeout(3000);
});