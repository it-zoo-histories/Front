import { ADD_NEW_POSITION, CHANGE_SEND, SET_STATUS } from "./constants";

export function AddNewPosition(lat, long){
    return{
        type: ADD_NEW_POSITION,
        payload: {
            latitude: lat,
            longitude: long
        }
    }
}

export function ChangeSend(){
    return {
        type: CHANGE_SEND,
        payload: true
    }
}

export function SetStatus(status){
    return {
        type: SET_STATUS,
        payload: status
    }
}