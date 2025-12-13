import { test } from "@playwright/test";
import path from "path";

test(`File Download`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent(`download`);

    await page.getByText(`Download`, { exact: true }).click();

    const fDown = await filePromise
    //option 1
    // await fDown.saveAs(`Data/NovPW.png`);

    // await fDown.saveAs(`Data/${fDown.suggestedFilename()}`);
    //Option2
    // await fDown.saveAs(path.join(__dirname,`TestData/Aboslute.png`))
    //     await page.waitForTimeout(3000);

    await fDown.saveAs(path.join(__dirname, `TestData/${fDown.suggestedFilename()}`));

    await fDown.saveAs(path.join(__dirname, `../TestData1/${fDown.suggestedFilename()}`));

    await fDown.saveAs(path.join(__dirname, `../../TestData2/${fDown.suggestedFilename()}`));

    await fDown.saveAs(path.join(__dirname, `../../../TestData3/${fDown.suggestedFilename()}`));


    await page.waitForTimeout(3000);

});