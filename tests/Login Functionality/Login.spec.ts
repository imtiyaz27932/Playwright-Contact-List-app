import { test, expect } from '../../fixtures/Fixture';
import credentials from '../../Data/LoginData.json';
import { LoginPage } from '../../Pages/LoginPage/LoginPage';

test.describe('Smoke Tests', () => {

    // Test for successful login
    test("User logs in successfully @login", async ({ loginPage }) => {
       // await loginPage.login(credentials.validCredentials.email, credentials.validCredentials.password);
        await loginPage.verifyUrl(); 
    });

    // Test for invalid login
    test('User tries to login with invalid credentials', async ({ loginPage }) => {
        await loginPage.login(credentials.invalidCredentials.email, credentials.invalidCredentials.password);
        await loginPage.errorMessage('Incorrect username or password'); 
    });

    // Test for logout functionality
    test('User logout functionality @logout', async ({ loginPage }) => {
        await loginPage.logout();
        await expect(loginPage.Email).toBeVisible(); 
    });

    // Test for authentication via API
    test("User is authenticated via API @via Api", async ({ apiLoginPage }) => {
         await apiLoginPage.verifyUrl(); 
    });
});
