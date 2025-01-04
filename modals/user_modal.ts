class UserAssistant {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(firstName: string, lastName: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    validateUserDetails(): void {
        if (!this.firstName || !this.lastName || !this.email || !this.password) {
            throw new Error('All user details must be specified.');
        }
    }
}

export default UserAssistant;
