import {REVERSE_AUTHENTICATED, GET_CURRENT_USER, LOGIN, SIGNUP, LOGOUT} from "./constants";
import {ACCESS_TOKEN} from "../API/constants";

const initState = {
    currentUser: undefined,
    isAuthenticated: false,
    accessToken: undefined,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem(ACCESS_TOKEN, action.accessToken.accessToken);
            return {...state, accessToken: action.accessToken.accessToken, isAuthenticated: true};
        case SIGNUP:
            return {...state, payload: action.payload};
        case REVERSE_AUTHENTICATED:
            return {...state, isAuthenticated: !state.isAuthenticated};
        case GET_CURRENT_USER:
            return {...state, currentUser: action.currentUser};
        case LOGOUT:
            return {...state, isAuthenticated: false, accessToken: undefined, currentUser: undefined}

        default:
            let token = window.localStorage.getItem(ACCESS_TOKEN);
            if (token != null) {
                return {...state, isAuthenticated: true}
            }
            return {...state, isAuthenticated: false}
    }
}