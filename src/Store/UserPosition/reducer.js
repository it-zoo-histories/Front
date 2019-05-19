import { ADD_NEW_POSITION, SET_STATUS, CHANGE_SEND } from "./constants";

const initState = {
    "latitude": 0,
    "longitude": 0,
    "send": true,
    "status": null
}

export default function UPI_userPositionState(state = initState, action){
    const {type, payload} = action;

    switch(type){
        case ADD_NEW_POSITION:
            return {...state, latitude: payload.latitude, longitude: payload.longitude, send: false}
        case SET_STATUS:
            return {...state, status: payload}
        case CHANGE_SEND:
            return {...state, send: payload}
        default:
            return state;
    }
}