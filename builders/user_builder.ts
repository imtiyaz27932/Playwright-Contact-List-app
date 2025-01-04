import { faker } from '@faker-js/faker';
import UserAssistant from '../modals/user_modal';

class UserBuilder {
    private firstName: string | null = null;
    private lastName: string | null = null;
    private email: string | null = null;
    private password: string | null = null;

    withFirstName(firstName: string): this {
        this.firstName = firstName;
        return this;
    }

    withLastName(lastName: string): this {
        this.lastName = lastName;
        return this;
    }

    withEmail(email: string): this {
        this.email = email;
        return this;
    }

    withPassword(password: string): this {
        this.password = password;
        return this;
    }

    buildUserData(): UserAssistant {
        const user = new UserAssistant(
            this.firstName || faker.person.firstName(),
            this.lastName || faker.person.lastName(),
            this.email || faker.internet.email(),
            this.password || faker.internet.password()
        );

        user.validateUserDetails();
        return user;
    }
}

export default UserBuilder;
