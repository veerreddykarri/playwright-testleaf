import { test } from "@playwright/test";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import dotenv from "dotenv"
import credentials from "../Data/login.json"

dotenv.config({path:"Data/prod.env"})



test(`Create Lead Verification`,async ({page}) => {

const vp = new ViewLeadPage(page)

await vp.loadUrl(process.env.BaseUrl as string)
await vp.enterCredentials(credentials[0].Username,credentials[0].Password)
await vp.clickLogin()
await vp.clickCRM()
await vp.clickLead()
await vp.clickCreateLead()
await vp.enterMandatoryDetails()
await vp.clickSubmit()
await vp.verifyFirstName()
    
})