import { test, expect } from "@playwright/test"
import { LoginPage } from "../../Pages/LoginPage/LoginPage"
import credentials from '../../Data/LoginData.json';

test("User logs in successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.login (credentials.validCredentials.email, credentials.validCredentials.password)
    await loginPage.verifyUrl()

})

test('User tries to login with invalid credentails', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openApplication()
    await loginPage.login(credentials.invalidCredentials.email,credentials.invalidCredentials.password)
    await loginPage.errorMessage('Incorrect username or password')
    
    
})

test('User logout functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.login(credentials.validCredentials.email, credentials.validCredentials.password)
    await loginPage.logout()
    await expect(loginPage.Email).toBeVisible();
    
})