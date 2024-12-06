class UserAssistant {
    constructor(
        firstName,
        lastName,
        email,
        password,
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
    }

    validateUserDetails() {
        if (
            !this.firstName ||
            !this.lastName ||
            !this.email ||
            !this.password
        ) {
            throw new Error('Must specify user details completely')
        }
    }
}

export default UserAssistant