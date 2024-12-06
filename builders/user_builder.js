
import UserAssistant from '../models/user.model'
import { faker } from '@faker-js/faker'

class UserBuilder {
    withFirstName(firstName) {
        this.firstName = firstName
        return this
    }

    withLastName(lastName) {
        this.lastName = lastName
        return this
    }

    withEmail(email) {
        this.email = email
        return this
    }

    withPassword(password) {
        this.password = password
        return this
    }

    

    buildUserData() {
        return new UserAssistant(
            this.firstName || faker.person.firstName(),
            this.lastName || faker.person.lastName(),
            this.email || faker.internet.email(),
            this.password || faker.internet.password(),
            
        )
    }
}

export default UserBuilder