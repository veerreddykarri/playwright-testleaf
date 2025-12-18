import {test } from "@playwright/test";

test.use({storageState:'Data/login_LT.json'})


test(`Launch from homepage`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/login;jsessionid=0D94F036F987868BC86D6588CCC7EBB7.jvm1`);

    console.log(await page.title());
    
})