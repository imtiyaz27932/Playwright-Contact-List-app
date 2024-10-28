import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from './Pages/LoginPage/LoginPage';

type MynewFixture = {
    loginPage: LoginPage;  // Define loginPage as a type of LoginPage
};

// Extend the base test with a custom fixture
export const test = base.extend<MynewFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.openApplication();   // Open the application once
        await use(loginPage);   // Expose loginPage as a fixture to each test
    }
});

export { expect };
