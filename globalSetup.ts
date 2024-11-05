import { Browser, chromium, Page } from "@playwright/test";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import Credentials from "../Playwright Contact List app/Data/LoginData.json";

async function globalsetup() {
    const browser: Browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    const loginPage = new LoginPage(page);

    // Use the instance method to login
    await loginPage.login(Credentials.validCredentials.email, Credentials.validCredentials.password);

    // Save the state on the webpage, i.e., we are logged in 
    await context.storageState({ path: "./loginAuth.json" });
    await browser.close();
}

export default globalsetup;
