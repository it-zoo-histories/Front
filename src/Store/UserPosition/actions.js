import { ADD_NEW_POSITION } from "./constants";

export function AddNewPosition(lat, long){
    return{
        type: ADD_NEW_POSITION,
        payload: {
            latitude: lat,
            longitude: long
        }
    }
}