import {FETCHED_HISTORY, ADD_HISTORY, CHANGE_STATE_HISTORY_PART} from './constants'

const initState = {
    "routes": [],
    "amount_routes": 0,
    "blockOpen": false,
}

export default function reducer(state = initState, action) {
    const {type, payload} = action;

    switch (type) {
        case FETCHED_HISTORY:
            // console.log("Fetched history", payload);
            return {...state, routes: payload.routes};
        case ADD_HISTORY:
            // console.log("Add history", payload);
            return {...state, routes: state.routes.push(payload)}
        case CHANGE_STATE_HISTORY_PART:
            return {...state, blockOpen: payload}
        default:
            return state
    }
}