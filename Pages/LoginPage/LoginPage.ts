import { expect, Locator, Page } from "@playwright/test"
export class LoginPage {
    readonly page: Page;   // create variable page of type Page & use readonly so that we will not be able to modify it later
    readonly Email: Locator;
    readonly Password: Locator;                 // Declared all properties here with types
    readonly LoginButton: Locator;
    readonly errormsg: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Email = page.getByPlaceholder('Email')                     // inside constucture , initialised value of it
        this.Password = page.getByPlaceholder('Password')
        this.LoginButton = page.getByRole('button', { name: 'submit' })
        this.errormsg = page.locator('#error')
        this.logoutButton= page.locator('#logout')

    }

    async openApplication(url: string = '/') {      
        await this.page.goto(url);
    }

    async login(email: string, password: string) {
        await this.Email.fill(email)
        await this.Password.fill(password)
        await this.LoginButton.click()
    }

    async verifyUrl() {
        await expect(this.page).toHaveURL(/.*contactList/)
    }

    async errorMessage(expectedmsg: string) {
       await expect(this.errormsg).toHaveText(expectedmsg)
    }

    async logout() {
        expect("#logout").toContain('logout')
        await this.logoutButton.click()
        await expect(this.page).toHaveURL("https://thinking-tester-contact-list.herokuapp.com/")
        
    }
    
}