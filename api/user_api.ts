class UserApi {
    static async createUserViaAPI(
        request: any,
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ): Promise<any> {

        const baseURL = process.env.QA_URL;
        // Prepare request payload
        const payload = {
            firstName,
            lastName,
            email,
            password,
        };

        // API request
        const response = await request.post(`${baseURL}/addUsers`, {
            data: payload,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        // Check response status
        if (response.status() !== 201) {
            throw new Error(`User registration failed. Status: ${response.status()}`);
        }

        return response;

    }
}

export default UserApi;
