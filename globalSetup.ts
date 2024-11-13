import { chromium } from "@playwright/test";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import Credentials from "../Playwright Contact List app/Data/LoginData.json"

async function globalsetup() {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  const loginPage = new LoginPage(page)
  loginPage.login(Credentials.validCredentials.email, Credentials.validCredentials.password)

  const cookies = await context.cookies();
  const storage = await context.storageState();
  console.log("Cookies after login:", cookies);
  console.log("Storage after login:", storage);



  await page.context().storageState({ path: "./sessionStorage/.auth/auth.json" })

}

export default globalsetup;