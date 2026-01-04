import { test } from "./fixture";

test("Use custom fixture",async({page})=>{
    //page is coming from custom fixture
    await page.locator("text=CRM/SFA").click();
    console.log(await page.title());
});