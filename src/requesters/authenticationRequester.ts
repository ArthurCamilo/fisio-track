import baseApiRequester from './baseApiRequester';

export class AuthenticationRequester {
    async authenticate(email: string, password: string): Promise<any> {
        return Promise.resolve({ token: 'FAKE_TOKEN', user: { fullName: 'ARTHUR', email: ''}});
        // TODO: Implement API
        // const token = (await baseApiRequester.put('/authenticate', { email, password })).data;
        // return token;
    }
}