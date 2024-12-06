import { faker } from "@faker-js/faker";
import { Page } from "@playwright/test";
import { lstat } from "fs";
import { addNewContact } from "./addContact";


export class ContactHelper {
    page: any;
    data: {
        firstName: string; lastName: string; dob: string; email: string; phone: string; streetaddress1: string; streetaddress2: string;
        city: string; state: string; postalcode: string; country: string;
    };
    constructor(page: Page) {
        this.page = page;

        this.data = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            dob: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }).toISOString().split('T')[0], 
            email: faker.internet.email(),
            phone: faker.number.int({ min: 100000000, max: 999999999 }).toString(),
            streetaddress1: faker.location.streetAddress(),
            streetaddress2: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            postalcode: faker.number.int({ min: 100000, max: 999999 }).toString(),
            country: faker.location.country()

        }
            
    };

    async addNewContact() {
        const addcontact = new addNewContact(this.page)
        await addcontact.addNewContact(
            this.data.firstName,
            this.data.lastName,
            this.data.dob,
            this.data.email,
            this.data.phone,
            this.data.streetaddress1,
            this.data.streetaddress2,
            this.data.city,
            this.data.state,
            this.data.postalcode,
            this.data.country
            
        )
    }
}