import { ADD_NEW_POSITION } from "./constants";

const initState = {
    "latitude": 0,
    "longitude": 0,
    "send": true,
}

export default function UPI_userPositionState(state = initState, action){
    const {type, payload} = action;

    switch(type){
        case ADD_NEW_POSITION:
            return {...state, latitude: payload.latitude, longitude: payload.longitude, send: false}
        default:
            return state;
    }
}