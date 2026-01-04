import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/01-loginPage";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import { AccountPage } from "../pages/07-accountPage";
import { CreateAccountPage } from "../pages/08-createAccountPage";
import { ViewAccountPage } from "../pages/09-viewAccountPage";

type myFixtures = {
    lop: LoginPage;
    wp: WelcomePage;
    hp: HomePage;
    lp: LeadPage;
    clp: CreateLeadPage;
    vlp: ViewLeadPage;
    ap: AccountPage;
    cap: CreateAccountPage;
    vap: ViewAccountPage;
}

export const test = baseTest.extend<myFixtures>({

    lop: async ({ page }, use) => {
        const lop = new LoginPage(page);
        await use(lop);
    },
    wp: async ({ page }, use) => {
        const wp = new WelcomePage(page);
        await use(wp);
    },
    hp: async ({ page }, use) => {
        const hp = new HomePage(page);
        await use(hp);
    },
    lp: async ({ page }, use) => {
        const lp = new LeadPage(page);
        await use(lp);
    },
    clp: async ({ page }, use) => {
        const clp = new CreateLeadPage(page);
        await use(clp);
    },
    vlp: async ({ page }, use) => {
        const vlp = new ViewLeadPage(page);
        await use(vlp);
    },
    ap: async ({ page }, use) => {
        const ap = new AccountPage(page);
        await use(ap);
    },
    cap: async ({ page }, use) => {
        const cap = new CreateAccountPage(page);
        await use(cap);
    },
    vap: async ({ page }, use) => {
        const vap = new ViewAccountPage(page);
        await use(vap);
    }
});