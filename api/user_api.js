class UserApi {
    constructor(request) {
        this.request = request;
    }

    static async createUserViaAPI(
        firstName,
        lastName,
        email,
        password
    ) {
        try {
            // Create user data builder
            const userBuilder = new userBuilder()
            const userData = userBuilder
                .withFirstName(firstName)
                .withLastName(lastName)
                .withEmail(email)
                .withPassword(password)
                .buildUserData()

            // Prepare request payload
            const payload = {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: userData.password
            }

            // Make API request
            const response = await request.post(
                'https://thinking-tester-contact-list.herokuapp.com/users/register',
                {
                    data: payload,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )

            // Check response status
            if (response.status() !== 201) {
                throw new Error(`User registration failed. Status: ${response.status()}`)
            }

        } catch (error) {
            console.error('Error in user registration:', error)
            throw error
        }
    }
}

export default UserApi