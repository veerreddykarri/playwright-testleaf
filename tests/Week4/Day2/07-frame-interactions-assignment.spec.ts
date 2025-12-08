import { test, expect } from '@playwright/test';

test(`Frame interactions Assignment`, async ({ page }) => {

  await page.goto(`https://leafground.com/frame.xhtml`);

  // Count frames and print Title and Url of each frame
  const frames = page.frames();
  console.log(`Total frames: ${frames.length}`);
  for (let framesData of frames) {
        const title = framesData.title();
        console.log(`The title of the frames are ${title}`);
        const url = framesData.url();
        console.log(`The URL of the frames are ${url}`);
    }

  // ---------- Single frame ----------
  const singleFrame = page.frameLocator(`[src="default.xhtml"]`);
  const clickMeButton = singleFrame.locator(`#Click`);
  await clickMeButton.click();
  await expect(clickMeButton).toHaveText(`Hurray! You Clicked Me.`);

  // ---------- Nested frames ----------
  const outerFrame = page.frameLocator(`[src="page.xhtml"]`);
  const innerFrame = outerFrame.frameLocator(`[src="framebutton.xhtml"]`);
  const nestedClickButton = innerFrame.locator(`#Click`);
  await nestedClickButton.click();
  await expect(nestedClickButton).toHaveText(`Hurray! You Clicked Me.`);

  await page.waitForTimeout(3000);
});
