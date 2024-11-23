
import { Locator,Page } from "@playwright/test";


export class addNewContact{
    readonly page: Page;
    readonly addcontactbtn: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly dob: Locator;
    readonly email: Locator;
    readonly phone: Locator;
    readonly streetaddress1: Locator;
    readonly streetaddress2: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly postalcode: Locator;
    readonly country: Locator;
    readonly submitbtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addcontactbtn= page.getByRole('button', { name: 'Add a New Contact' })
        this.firstName = page.getByLabel('First Name')
        this.lastName = page.getByLabel('Last Name')
        this.dob = page.getByLabel('Date of Birth')
        this.email = page.getByLabel('Email')
        this.phone = page.getByLabel('Phone')
        this.streetaddress1 = page.getByLabel('Street Address 1')
        this.streetaddress2 = page.getByLabel('Street Address 2')
        this.city = page.getByLabel('City')
        this.state = page.getByLabel(' State or Province')
        this.postalcode = page.getByLabel('Postal Code')
        this.country = page.getByLabel('Country')
        this.submitbtn= page.getByRole('button',{name:'Submit'})

        
    }

    async addNewContact(firstName: string, lastName: string,  dob: string, email: string, phone: string, streetaddress1: string, streetaddress2: string, city: string, state: string, postalcode: string, country: string) {
        await this.addcontactbtn.click()
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.dob.fill(dob)
        await this.email.fill(email)
        await this.phone.fill(phone)
        await this.streetaddress1.fill(streetaddress1)
        await this.streetaddress2.fill(streetaddress1)
        await this.city.fill(city)
        await this.state.fill(state)
        await this.postalcode.fill(postalcode)
        await this.country.fill(country)
        await this.submitbtn.click()
    }


}