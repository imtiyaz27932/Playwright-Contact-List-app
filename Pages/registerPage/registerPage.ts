// import { Locator, Page, expect } from "@playwright/test";


// export class Register {

//     readonly page: Page;
//     readonly signupbtn: Locator
//     readonly Firstname: Locator;
//     readonly Lastname: Locator;
//     readonly Email: Locator;
//     readonly Password: Locator;
//     readonly submit: Locator;

//     constructor(page: Page) {
//         this.page = page;
//         this.signupbtn = page.getByRole('button', { name: 'Sign up' })
//         this.Firstname = page.getByPlaceholder('First Name')
//         this.Lastname = page.getByPlaceholder('Last Name')
//         this.Email = page.getByPlaceholder('Email')
//         this.Password = page.getByPlaceholder('Password')
//         this.submit = page.getByRole('button', { name: 'Submit' })
//     }

//     async register(fname: string, lname: string, email: string, psd: string) {
//         await this.signupbtn.click()
//         await this.Firstname.fill(fname)
//         await this.Lastname.fill(lname)
//         await this.Email.fill(email)
//         await this.Password.fill(psd)
//         await this.submit.click()
//         await expect(this.page).toHaveURL((/.*contactList/))
//     }
// }


import { Locator, Page, expect } from "@playwright/test";

export class Register {
    readonly page: Page;
    readonly signupbtn: Locator;
    readonly Firstname: Locator;
    readonly Lastname: Locator;
    readonly Email: Locator;
    readonly Password: Locator;
    readonly submit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupbtn = page.getByRole('button', { name: 'Sign up' });
        this.Firstname = page.getByPlaceholder('First Name');
        this.Lastname = page.getByPlaceholder('Last Name');
        this.Email = page.getByPlaceholder('Email');
        this.Password = page.getByPlaceholder('Password');
        this.submit = page.getByRole('button', { name: 'Submit' });
    }

    async register(fname: string, lname: string, email: string, psd: string) {
        await this.signupbtn.click();
        await this.Firstname.fill(fname);
        await this.Lastname.fill(lname);
        await this.Email.fill(email);
        await this.Password.fill(psd);
        await this.submit.click();
        await expect(this.page).toHaveURL(/.*contactList/);
    }
}
