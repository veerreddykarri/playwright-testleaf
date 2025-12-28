import { test } from "@playwright/test";
import dotenv from "dotenv"
import credentials from "../Data/login.json"
import { ViewAccountPage } from "../pages/09-viewAccountPage";

dotenv.config({path:"Data/prod.env"})



test(`Create Account Verification`,async ({page}) => {

const ap = new ViewAccountPage(page)

await ap.loadUrl(process.env.BaseUrl as string)
await ap.enterCredentials(credentials[0].Username,credentials[0].Password)
await ap.clickLogin()
await ap.clickCRM()
await ap.clickAccount()
await ap.clickCreateAccount()
await ap.enterMandatoryDetails()
await ap.clickSubmit()
await ap.verifyAccountName()
});