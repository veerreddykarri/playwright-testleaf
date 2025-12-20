import { expect, test } from "@playwright/test";
import path from "path";
import fs from "fs";

test(`File upload`, async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');


    const filePath = path.join(__dirname, 'TestData', 'Veer.txt');

    await page.setInputFiles('#file-upload', filePath);

    await page.evaluate(() => {
        const form = document.querySelector("form");
        if (!form) throw new Error("Upload form not found");
        form.submit();
    });

    await expect(page.locator("h3")).toHaveText("File Uploaded!");
    await expect(page.locator("#uploaded-files")).toHaveText("Veer.txt");
    await page.waitForTimeout(3000);
});


test(`Picture upload`, async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    const files = [
        path.join(__dirname, 'TestData', 'TestLeaf Logo.png'),
        path.join(__dirname, 'TestData', 'TestLeaf Logo Test.png')
    ];
    const [fileChooser] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.locator("#drag-drop-upload").click(), // red box
    ]);

    await fileChooser.setFiles(files);

    await page.waitForTimeout(3000);
});

test.only(`Test Download`, async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');
    const filePromise = page.waitForEvent(`download`);
    await page.getByText(`report.html`, { exact: true }).click();

    const fDown = await filePromise

    const savedPath = path.join(__dirname, `TestData`, `${fDown.suggestedFilename()}`);

    await fDown.saveAs(savedPath);

    expect(fs.existsSync(savedPath)).toBeTruthy();
    const stat = fs.statSync(savedPath);
    expect(stat.size).toBeGreaterThan(0);
    await page.waitForTimeout(3000);
});