import { SETUP_CREDENTIAL_USERNAME, SETUP_CREDENTIAL_PASSWORD, SETUP_CREDENTIAL_EMAIL, RESET_CREDENTIALS } from "./constants";

const initState = {
    "name": null,
    "password": null,
    "email": null,
}

export default function reducer(state = initState, action){
    const {type, payload} = action;
    console.log("UserCrdential state")
    switch(type){
        case SETUP_CREDENTIAL_USERNAME:
            return {...state, name: payload}
        case SETUP_CREDENTIAL_PASSWORD:
            return {...state, password: payload}
        case SETUP_CREDENTIAL_EMAIL:
            return {...state, email: payload}
        case RESET_CREDENTIALS:
            return {...state, username: null, password: null, email: null}
        default:
            return state;
    }
}