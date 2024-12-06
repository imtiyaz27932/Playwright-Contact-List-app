
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { authenticateViaAPI } from './apiAuth';
import { addContactViaAPI } from '../apiAuthAddNewContact';


type MynewFixture = {
    loginPage: LoginPage;
    apiLoginPage: LoginPage;
    apiAddContact: LoginPage;
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

    apiAddContact: async ({ page, request }, use) => {
        await addContactViaAPI(request, page);
        const addcontact = new LoginPage(page);
        await use(addcontact)

    }
});

export { expect };

