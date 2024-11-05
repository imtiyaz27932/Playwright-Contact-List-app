
import { faker } from "@faker-js/faker";
import { Register } from "./registerPage/registerPage"; 
import { Page } from "@playwright/test";

export class RegisterHelper {
    page: any;
    data: { firstName: string; lastName: string; email: string; password: string; };
    constructor(page: Page) {
        this.page = page;
    
        this.data = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
    }
    async registerUser() {
        const registerPage = new Register(this.page);
        await registerPage.register(
            this.data.firstName,  
            this.data.lastName,
            this.data.email,
            this.data.password
        );
    }
}
