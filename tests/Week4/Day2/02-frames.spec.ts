import { test } from "@playwright/test";
test(`Learn frames`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);
    const allFrames = page.frames();
    console.log(allFrames);

    const frameCount = allFrames.length;

    console.log(`The total count of frames in the page is ${frameCount}`);

    //----------------------For Loop----------------------------------------
    for (let index = 0; index < frameCount; index++) {
        const title = await allFrames[index].title();
        console.log(`The title of the frames are ${title}`);

        const url = await allFrames[index].url();
        console.log(`The URL of the frames are ${url}`);
    }
    
    //--------------------For Of Loop----------------------------------------
    for (let framesData of allFrames) {
        const title = await framesData.title();
        console.log(`The title of the frames are ${title}`);
        const url = await framesData.url();
        console.log(`The URL of the frames are ${url}`);
    }

 // ---------------------- ForEach Loop --------------------------------------
    // ❗ forEach does NOT handle async/await, so we wrap inside Promise.all
    await Promise.all(
        allFrames.map(async frame => {
            const title = await frame.title();
            const url = await frame.url();
            console.log(`ForEach → Title: ${title}, URL: ${url}`);
        })
    );

});