import { test } from "../utility/customFixtures";
import dotenv from "dotenv"
import credentials from "../Data/login.json"
dotenv.config({ path: "Data/prod.env" })



test(`Create Lead Verification`, async ({ lop, wp, hp, lp, clp, vlp }) => {

    await lop.loadUrl(process.env.BaseUrl as string)
    await lop.enterCredentials(credentials[0].Username, credentials[0].Password)
    await lop.clickLogin()
    await wp.clickCRM()
    await hp.clickLead()
    await lp.clickCreateLead()
    await clp.enterMandatoryDetails()
    await clp.clickSubmit()
    await vlp.verifyFirstName()

});