import {REVERSE_AUTHENTICATED, GET_CURRENT_USER, LOGIN, SIGNUP} from "./constants";
import {ACCESS_TOKEN} from "../API/constants";

const initState = {
    currentUser: undefined,
    isAuthenticated: false,
    accessToken: undefined,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            console.log("Reduce login", action.accessToken);
            localStorage.setItem(ACCESS_TOKEN, action.accessToken.accessToken);
            console.log("After merge", {...state, accessToken: action.accessToken.accessToken, isAuthenticated: true});
            return {...state, accessToken: action.accessToken.accessToken, isAuthenticated: true};
        case SIGNUP:
            console.log("Reduce signUp");
            return {...state, payload: action.payload};
        case REVERSE_AUTHENTICATED:
            console.log("Reduce authentication");
            return {...state, isAuthenticated: !state.isAuthenticated};
        case GET_CURRENT_USER:
            return {...state, currentUser: action.currentUser};
        default:
            let token = window.localStorage.getItem(ACCESS_TOKEN);
            if (token != null) {
                return {...state, isAuthenticated: true}
            }
            return {...state, isAuthenticated: false}
    }
}