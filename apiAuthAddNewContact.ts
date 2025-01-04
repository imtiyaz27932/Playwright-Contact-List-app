import { faker } from "@faker-js/faker";
import { APIRequestContext, expect, Page } from "@playwright/test";
import { stat } from "fs";



export async function addContactViaAPI(request: APIRequestContext, page: Page) {
    const cookies = await page.context().cookies('https://thinking-tester-contact-list.herokuapp.com');
    const tokenCookie = cookies.find(cookie => cookie.name === 'token');
    const token = tokenCookie ? tokenCookie.value : null;

    const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        },
        data: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthdate: faker.date.past({ years: 50 }).toISOString().split('T')[0],
            email: faker.internet.email(),
            phone: faker.string.numeric(10),
            street1: faker.location.streetAddress(),
            street2: faker.location.secondaryAddress(),
            city: faker.location.city(),
            stateProvince: faker.location.state(),
            postalCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    });

    const responseBody = await response.json();
    console.log(responseBody);

    const status = response.status();
    expect(status).toBe(201);
    console.log(status)

    expect(responseBody).toMatchObject({

        firstName: expect.any(String),
        lastName: expect.any(String),
        email: expect.any(String),
        phone: expect.any(String),
        street1: expect.any(String),
        street2: expect.any(String),
        city: expect.any(String),
        stateProvince: expect.any(String),
        postalCode: expect.any(String),
        country: expect.any(String),
    });




    return responseBody;
}