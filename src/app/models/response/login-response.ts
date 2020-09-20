export class LoginResponse {

    errorMessage: string;
    token: string;

    constructor(errorMessage: string, token: string) {
        this.errorMessage = errorMessage;
        this.token = token;
    }

}
