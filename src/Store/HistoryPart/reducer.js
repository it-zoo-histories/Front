import {FETCHED_HISTORY, ADD_HISTORY} from './constants'

const initState = {
    "routes": [],
    "amount_routes": 0
}

export default function reducer(state = initState, action) {
    const {type, payload} = action;

    switch (type) {
        case FETCHED_HISTORY:
            console.log("Fetched history", payload);
            return {...state, routes: payload.routes};
        case ADD_HISTORY:
            console.log("Add history", payload);
            return state;
        default:
            return state
    }
}