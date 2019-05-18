import { ADD_NEW_CONNECTION, SEND_NEW_POSITION } from "./constants";

const initState = {
    socket: null
}

export default function USI_socketState(state = initState, action){
    const {type, payload} = action;


    switch(type){
        case ADD_NEW_CONNECTION:
            return {...state, socket: payload}
        
        case SEND_NEW_POSITION:
            if (state.socket.onopen != null){
                state.socket.send("HELLO WORLD!")
            } else {
                return state;
            }
        default:
            return state;
    }
}