import { test } from "../../Fixture"
import { Register } from "../../Pages/registerPage/registerPage"
import { faker } from "@faker-js/faker"

test('User Registeration', async ({ loginPage, page }) => {
    const registerion = new Register(page)
    const randomFName = faker.person.firstName()
    const randomLName = faker.person.lastName()
    const randomEmail = faker.internet.email()
    const randomPassword = faker.internet.password()
    await registerion.register(randomFName, randomLName, randomEmail, randomPassword)

})