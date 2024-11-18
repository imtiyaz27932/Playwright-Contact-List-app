
// import { chromium } from "@playwright/test";
// import Credentials from "../Playwright Contact List app/Data/LoginData.json";

// async function loginAndAddCookies(context: any) {
//   const response = await context.request.post(
//     'https://thinking-tester-contact-list.herokuapp.com/users/login',
//     {
//       data: {
//         email: Credentials.validCredentials.email,
//         password: Credentials.validCredentials.password,
//       },
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   const responseData = await response.json();
//   const token = responseData.token;

 

//   // Add the token as a cookie
//   await context.addCookies([
//     {
//       name: 'token',
//       value: token,
//       domain: 'thinking-tester-contact-list.herokuapp.com',
//       path: '/',
//       httpOnly: true,
//       secure: true,
//       sameSite: 'Lax',
//     },
//   ]);
// }

// async function globalsetup() {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Log in and adds cookies
//   await loginAndAddCookies(context);

  

//   // Store session state
//   await context.storageState({ path: "./sessionStorage/.auth/auth.json" });

//   await browser.close();
// }

// export default globalsetup;


import { chromium } from "@playwright/test";
import Credentials from "../Playwright Contact List app/Data/LoginData.json";

async function loginAndAddCookies(context: any) {
    const response = await context.request.post(
        'https://thinking-tester-contact-list.herokuapp.com/users/login',
        {
            data: {
                email: Credentials.validCredentials.email,
                password: Credentials.validCredentials.password,
            },
            headers: { 'Content-Type': 'application/json' },
        }
    );

    const responseData = await response.json();
    const token = responseData.token;

    // Add token to cookies and session storage
    await context.addCookies([
        {
            name: 'token',
            value: token,
            domain: 'thinking-tester-contact-list.herokuapp.com',
            path: '/',
            httpOnly: true,
            secure: true,
            sameSite: 'Lax',
            expires: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days
        },
    ]);

    console.log("Cookies set:", await context.cookies());
}

async function globalsetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await loginAndAddCookies(context);

    await context.storageState({ path: "./sessionStorage/.auth/auth.json" });
    await browser.close();
}

export default globalsetup;
