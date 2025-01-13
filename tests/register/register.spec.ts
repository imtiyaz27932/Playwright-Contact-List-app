
import { test } from "../../fixtures/Fixture";
import { RegisterHelper } from "../../Pages/registerPage/registerdata";
import { setupConsoleLogger } from "../../builders/utils/logger";

test('User Registration', async ({ page, loginPage }) => {
    setupConsoleLogger(page);
    const registrationHelper = new RegisterHelper(page);
    await registrationHelper.registerUser();
   
    
});