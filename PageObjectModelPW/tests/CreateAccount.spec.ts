import { test } from "../utility/customFixtures";
import dotenv from "dotenv"
import credentials from "../Data/login.json"
dotenv.config({ path: "Data/prod.env" })



test(`Create Account Verification`, async ({ lop, wp, hp, ap, cap, vap }) => {
    await lop.loadUrl(process.env.BaseUrl as string)
    await lop.enterCredentials(credentials[0].Username, credentials[0].Password)
    await lop.clickLogin()
    await wp.clickCRM()
    await hp.clickAccount()
    await ap.clickCreateAccount()
    await cap.enterMandatoryDetails()
    await cap.clickSubmit()
    await vap.verifyAccountName()
});