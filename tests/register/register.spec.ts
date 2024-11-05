
import { test } from "../../fixtures/Fixture";
import { RegisterHelper } from "../../Pages/registerdata";

test('User Registration', async ({ page, loginPage }) => {
    const registrationHelper = new RegisterHelper(page);
    await registrationHelper.registerUser();
});