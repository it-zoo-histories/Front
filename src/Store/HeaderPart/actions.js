import { CHANGE_STATE_HEADER_MENU } from "./constants";
import { logout } from "../Auth/actions";
import { ChangeStateHistoryBlock } from "../HistoryPart/actions";

export function changeStateHeaderMenu(state){
    return dispatch => {
        console.log("[HEADER_REDUCER]: ", state);

        dispatch({
            "type": CHANGE_STATE_HEADER_MENU,
            "payload": state,
        })
    }
}

export function handleClickOpenHeaderMenu(event){
    const actor = event.target.getAttribute("actor");
    const state = event.target.getAttribute("state");

    return dispatch => {
        switch(actor){
            case "history_open":
                dispatch({
                    "type": CHANGE_STATE_HEADER_MENU,
                    "payload": false
                })
                dispatch(ChangeStateHistoryBlock(true));
                return
            case "logout":
                dispatch({
                    "type": CHANGE_STATE_HEADER_MENU,
                    "payload": false,
                })
                dispatch(logout())
                return
            default:
                return
        }
    }
}