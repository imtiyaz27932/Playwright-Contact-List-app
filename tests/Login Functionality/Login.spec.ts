import { test, expect } from '../../fixtures/Fixture';
import credentials from '../../Data/LoginData.json';
import { LoginPage } from '../../Pages/LoginPage/LoginPage';


test.describe('Smoke Tests', () => {

    test("User logs in successfully @login", async ({ loginPage }) => {
        
        await loginPage.login(credentials.validCredentials.email, credentials.validCredentials.password);
        await loginPage.verifyUrl();

    });
    test('User tries to login with invalid credentials', async ({ loginPage }) => {
        await loginPage.login(credentials.invalidCredentials.email, credentials.invalidCredentials.password);
        await loginPage.errorMessage('Incorrect username or password');

    });
    test('User logout functionality', async ({ loginPage }) => {
        await loginPage.logout();
        await expect(loginPage.Email).toBeVisible();

    });
    test("User is authenticated via API ", async ({ apiLoginPage }) => {
        await apiLoginPage.verifyUrl();

    });
})







