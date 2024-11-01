import { test as base, expect } from '@playwright/test';
import { LoginPage } from './Pages/LoginPage/LoginPage';

type MynewFixture = {
    loginPage: LoginPage;  // Define loginPage as a type of LoginPage
};


export const test = base.extend<MynewFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.openApplication();   // Open the application once
        await use(loginPage);   // Expose loginPage as a fixture to each test
    }
});

export { expect };
