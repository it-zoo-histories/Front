import {API_BASE_URL} from "../../Store/API/constants";
import request from "./requestWithoutToken";

class AuthService {

    async getCurrentUser() {
        return await request({
            url: API_BASE_URL + "/user/me",
            method: 'GET'
        })
    }

    async login(loginRequest) {
        console.log("login Request",loginRequest)
        return await request({
            url: API_BASE_URL + "/auth/login",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        })
    }

    async signup(signupRequest) {
        console.log("SignUp request", signupRequest);
        return await request({
            url: API_BASE_URL + "/auth/signup",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        });
    }
}

export default new AuthService()