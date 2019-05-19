import { CHANGE_STATE_HEADER_MENU } from "./constants";

const initState = {
    "openUserMenu": false,
    "userMenu": [
        {
            "id": 0,
            "name": "История",
            "avatar": "https://img.icons8.com/cotton/2x/time-machine.png",
            "actor": "history_open",
            "state": false,
        },
        {
            "id": 1,
            "name": "Выход",
            "avatar": "http://cdn.onlinewebfonts.com/svg/img_164333.png",
            "actor": "logout",
            "state": null
        }
    ],
}

export default function HPI_headerPartState(state = initState, action){
    const {type, payload} = action;

    switch(type){
        case CHANGE_STATE_HEADER_MENU:
            return {...state, openUserMenu: payload}
        default:
            return state;
    }
}