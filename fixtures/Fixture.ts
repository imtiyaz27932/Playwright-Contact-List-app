import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { authenticateViaAPI } from './apiAuth';

type MynewFixture = {
    loginPage: LoginPage;
    apiLoginPage: LoginPage;
};

export const test = base.extend<MynewFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.openApplication();
        await use(loginPage);
    },

    apiLoginPage: async ({ page, request }, use) => {
        // Authenticate via API and store token in session storage
        await authenticateViaAPI(request, page);

        const loginPage = new LoginPage(page);
        await loginPage.openApplication();
        await use(loginPage);
    },
});

export { expect };
