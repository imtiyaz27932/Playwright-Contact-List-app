
import { test } from "../../fixtures/Fixture";
import { ContactHelper } from "../../Pages/contactPage/contactData";
import credentials from '../../Data/LoginData.json';
import { LoginPage } from "../../Pages/LoginPage/LoginPage";




test('Add a New Contact', async ({ page, loginPage }) => {
    await loginPage.login(credentials.validCredentials.email, credentials.validCredentials.password);
    const addcontact = new ContactHelper(page)
    await addcontact.addNewContact()


})

test('Add a New Contact via API', async ({ page, apiLoginPage, apiAddContact }) => {
    console.log('New Contact added successfully via API')

}) 