import { test } from "@playwright/test";
import {parse} from "csv-parse/sync" // this parse is used to convert from csv to JSON
import fs from "fs" // -> filesystem to read data from your system
import path from "path";

const csvPath = path.resolve(
  __dirname,
  "Data",
  "login.csv"
);

let records : any[] = parse(fs.readFileSync(csvPath),{columns:true,skip_empty_lines:true})

for( let data of records){

test(`Learn to read data from CSV ${data.tcid} `, async ({ page }) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`)

    await page.locator(`//input[@id="username"]`).fill(data.username);

    await page.locator(`//input[@id="password"]`).fill(data.password);

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click()

    await page.waitForTimeout(3000)
})
}


/* Notes:
Internally:
Before Conversion :

tcid,username,password
1,demoSalesManager,crmsfa
2,demoCSR,crmsfa

After Conversion :

[{
tcid : 1,
username : demoSalesManager,
password : crmsfa,
},
{
tcid : 2,
username : demoCSR,
password : crmsfa,
}



}]*/