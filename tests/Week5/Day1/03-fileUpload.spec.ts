import { test } from "@playwright/test";
import path from "path";

test(`File upload`, async ({ page }) => {

    await page.goto('https://leafground.com/file.xhtml');


    const filePath = path.join(__dirname, 'TestData','Veer.txt');

    await page.setInputFiles('#j_idt88\\:j_idt89_input', filePath);

    const files = [
        path.join(__dirname, 'TestData', 'TestLeaf Logo.png'),
        path.join(__dirname, 'TestData', 'TestLeaf Logo Test.png')
    ];

    await page.setInputFiles('#j_idt97\\:j_idt98_input', files);

    await page.locator('button.ui-fileupload-upload').click();

    await page.waitForTimeout(3000);

});