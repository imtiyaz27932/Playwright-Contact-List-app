import { APIRequestContext, Page } from '@playwright/test';
import credentials from '../Data/LoginData.json';

export async function authenticateViaAPI(request: APIRequestContext, page: Page) {

    const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {
        data: {
            email: credentials.validCredentials.email,
            password: credentials.validCredentials.password,
        },
    });


    const responseData = await response.json();
    const token = responseData.token;

    

    await page.addInitScript((authToken) => {
        sessionStorage.setItem('token', authToken); 
    }, token);

    // Navigate directly to the dashboard after setting the token
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/contactList');
}
