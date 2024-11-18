
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
        // Authenticate and set token/session
        await authenticateViaAPI(request, page);


        //  LoginPage object for further interactions
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

export { expect };

