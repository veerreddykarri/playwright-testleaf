import { test } from "@playwright/test";
import dotenv from "dotenv"
import path from "path";

let filename = process.env.envFile || 'qa' // $env:envFile used in terminal to switch between environment


dotenv.config({path:path.join(__dirname, "Data", `${filename}.env`)}) // Set the environment to execute the test in that specific env.

test(`Learn to read data from env file`,async ({page}) => {
    
//    console.log(process.env.BaseUrl);
//    console.log(process.env.LF_Username);
//     console.log(process.env.LF_Password);

 await page.goto(process.env.BaseUrl as string) // Type assertion 

    await page.locator(`//input[@id="username"]`).fill(process.env.LF_Username as string);

    await page.locator(`//input[@id="password"]`).fill(process.env.LF_Password as string);

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click()

    await page.waitForTimeout(3000)
   
})



//console.log(process.env.USERNAME); -->  system enviroment variables
