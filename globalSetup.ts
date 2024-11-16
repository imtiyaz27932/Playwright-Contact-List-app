import { chromium } from "@playwright/test";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import Credentials from "../Playwright Contact List app/Data/LoginData.json";

async function globalsetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.login(Credentials.validCredentials.email, Credentials.validCredentials.password);

  
  await context.addCookies([
    {
      name: 'token',
      value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzEzMmVlOTc3YWRiMDAwMTNkYWJiNjEiLCJpYXQiOjE3MzMzNzEzMzE5NzAsInNhdmVkIjp0cnVlfQ.sso9I4jcvwF9HkTV39so4Q7hYxIX-MklN0WRf9gntTg', 
      path: '/',
      expires: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, 
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
    },
  ]);

  // Log cookies and storage
  const cookies = await context.cookies();
  const storage = await context.storageState();
  console.log("Cookies after setting:", cookies);
  console.log("Storage after setting:", storage);

  // Store session state
  await context.storageState({ path: "./sessionStorage/.auth/auth.json" });

  
}

export default globalsetup;
