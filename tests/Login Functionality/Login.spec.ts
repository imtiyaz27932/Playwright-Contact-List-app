import { test, expect } from '../../Fixture';
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
    await loginPage.login(credentials.validCredentials.email, credentials.validCredentials.password);
    await loginPage.logout();
    await expect(loginPage.Email).toBeVisible();
});
