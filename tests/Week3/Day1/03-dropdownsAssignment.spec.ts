import { test, expect } from "@playwright/test";

test("Dropdowns Assignment", async ({ page }) => {

  await page.goto("https://leafground.com/select.xhtml");

  // 1. Select UI tool
  await page
    .locator("(//select[contains(@class,'ui-selectonemenu')])[1]")
    .selectOption({ label: "Playwright" });

  // Print all tools
  const tools = page.locator("(//select[contains(@class,'ui-selectonemenu')])[1]/option");
  const toolCount = await tools.count();
  console.log("Tools count:", toolCount);

  for (let i = 0; i < toolCount; i++) {
    console.log(await tools.nth(i).innerText());
  }

  // 2. Pick a country
  await page
    .locator("//h5[text()='Choose your preferred country.']/following::div[contains(@class,'ui-selectonemenu-trigger')][1]")
    .click();
  await page.locator("//li[@data-label='India']").click();

  // 3. Open city dropdown
  await page
    .locator("//h5[text()='Confirm Cities belongs to Country is loaded']/following::div[contains(@class,'ui-selectonemenu-trigger')][1]")
    .click();

  // Print cities
  const cities = page.locator("//ul[contains(@id,'city')]/li");
  const cityCount = await cities.count();
  console.log("Cities loaded:", cityCount);

  for (let i = 0; i < cityCount; i++) {
    console.log(await cities.nth(i).innerText());
  }

  // Select a city
  await cities.nth(1).click();

  // 4. Pick three courses
  await page
    .locator("//h5[text()='Choose the Course']/following::button")
    .first()
    .click();

  await page.locator("//li[contains(text(),'Selenium')]").click();
  await page.locator("//li[contains(text(),'Playwright')]").click();
  await page.locator("//li[contains(text(),'RestAssured')]").click();

  // 5. Choose language + print options
  await page
    .locator("//h5[text()='Choose language randomly']/following::div[contains(@class,'ui-selectonemenu-trigger')][1]")
    .click();

  const languages = page.locator("//ul[contains(@id,'lang')]/li");
  const langCount = await languages.count();

  console.log("Languages:");
  for (let i = 0; i < langCount; i++) {
    console.log(await languages.nth(i).innerText());
  }

  // Pick any language
  await languages.nth(3).click();

  // 6. Pick "Two" (any language)
  await page
    .locator(`//h5[text()="Select 'Two' irrespective of the language chosen"]/following::div[contains(@class,'ui-selectonemenu-trigger')]`)
    .click();

  await page.locator("//li[@data-label='రెండు']").click();
});
