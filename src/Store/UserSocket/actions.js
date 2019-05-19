import { API_SOCKET_URL, ADD_NEW_CONNECTION, SEND_NEW_POSITION } from "./constants";

import Position from '../../Services/Position/entry';
import request_post from "../API/request_post";
import { API_SendCurrentPosition } from "../API/constants";
import { SetStatus } from "../UserPosition/actions";

export function openRoomToConnect(){
    return dispatch => {
        let socket = new WebSocket(API_SOCKET_URL);

        console.log("[BEFORE_SOCKET]: object web socket: ", socket)

        socket.onopen = (state => {
            console.log("[SOCKET]: Connected state: ", state)
            dispatch(addNewSocket(socket))
            console.log("[SOCKET]: CONNECTION START")
        })
    }
}

export function SendCurrentPosition(currentPosition){
    return dispatch => {
        let result = request_post({
            url: API_SendCurrentPosition, 
            body: currentPosition
        })

        result.then(status => {
            dispatch(SetStatus(status))
        })

        // let serviceRequested = Position.sendCurrentPosition(currentPosition);

        // serviceRequested
        // .then(resp => console.log("success send"))
        // .catch(err => console.log(err))
    }
}

export function sendDataToRoom(data){
    return dispatch => {
        dispatch(addNewData(data))
        // dispatch()
    }
}

function addNewSocket(socket) {
    return {
        type: ADD_NEW_CONNECTION,
        payload: socket
    }
}

function addNewData(data){
    return{
        type: SEND_NEW_POSITION,
        payload: data
    }
}