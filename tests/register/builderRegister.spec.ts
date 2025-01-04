import { test, expect } from '@playwright/test';
import { Register } from '../../Pages/registerPage/registerPage';
import UserBuilder from '../../builders/user_builder';

test.describe(' User Registration Tests', () => {
    let userData: any;

    test.beforeEach(async ({ page }) => {
        // Initialize reusable test data using the builder
        const userBuilder = new UserBuilder();
        userData = userBuilder
            .withFirstName('John')
            .withLastName('Doe')
            .withEmail('infoot@yopmail.com')
            .withPassword('Pass@1234')
            .buildUserData();

        // Navigate to the application URL
        await page.goto('/');
    });

    test('Registers a user with valid data', async ({ page }) => {
        const registerPage = new Register(page);

        // Perform user registration
        await registerPage.register(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.password
        );

        // Assert successful navigation to contact list page
        expect(page.url()).toMatch(/.*contactList/);
    });

    test('Admin registers another user with different valid data', async ({ page }) => {
        const registerPage = new Register(page);

        // Update user data for the second test case
        const userBuilder = new UserBuilder();
        userData = userBuilder
            .withFirstName('Jane')
            .withLastName('Smith')
            .withEmail('infor227@yopmail.com')
            .withPassword('Pass@5678')
            .buildUserData();

        // Perform user registration
        await registerPage.register(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.password
        );

        // Assert successful navigation to contact list page
        expect(page.url()).toMatch(/.*contactList/);
    });
});


// import {test,expect} from '../../fixtures/Fixture'
// import { LoginPage } from '../../Pages/LoginPage/LoginPage';
// import { Register } from '../../Pages/registerPage/registerPage'
// import { addNewContact } from '../../Pages/contactPage/addContact'
// import UserBuilder from '../../builders/user_builder';
// import UserApi from '../../api/user_api';

// test.describe('User Registration and Login', () => {
//     test('should register the new user and login into application', async ({ page, request, }) => {
//         // Create user using builder pattern
//         const userBuilder = new UserBuilder();
//         const user = userBuilder
//             .withFirstName('John')
//             .withLastName('Doe')
//             .withEmail('infoo@yopmail.com')
//             .withPassword('Pass@1234')
//             .buildUserData();

//         // Sign up user using API
//         await UserApi.createUserViaAPI(
//             request,
//             user.firstName,
//             user.lastName,
//             user.email,
//             user.password
            
//         );
        
        
//         // Initialize page objects
//         const loginPage = new LoginPage(page);
//         const contactPage = new addNewContact(page);

//         // Navigate and login
//         await loginPage.openApplication();
//         await loginPage.login(user.email, user.password);

//         // Verify elements are visible and contain correct text using your existing page objects
//         await expect(contactPage.addcontactbtn).toBeVisible();
//         await expect(contactPage.addcontactbtn).toHaveText('Add a New Contact');
//         await expect(loginPage.logoutButton).toBeVisible();

//         // Optional: Verify the URL after login
//         await loginPage.verifyUrl();
//     });
// });