import { test, expect } from '../../fixtures/Fixture';
import credentials from '../../Data/LoginData.json';

test("User logs in successfully", async ({ loginPage }) => {
    await loginPage.login(credentials.validCredentials.email, credentials.validCredentials.password);
    await loginPage.verifyUrl();
});

test('User tries to login with invalid credentials', async ({ loginPage }) => {
    await loginPage.login(credentials.invalidCredentials.email, credentials.invalidCredentials.password);
    await loginPage.errorMessage('Incorrect username or password');
});

test('User logout functionality', async ({ loginPage }) => {
    //await loginPage.login(credentials.validCredentials.email, credentials.validCredentials.password); // Ensure the user is logged in first
    await loginPage.logout();
    await expect(loginPage.Email).toBeVisible(); // Verify that email input is visible after logout
});
