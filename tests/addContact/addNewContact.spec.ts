
import { test } from "../../fixtures/Fixture";
import { ContactHelper } from "../../Pages/contactData";

 
test('Add a New Contact', async ({ page,loginPage }) => {
    const addcontact = new ContactHelper(page)
    await addcontact.addNewContact()
    
    
})