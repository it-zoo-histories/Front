import { GET_ROUTES_FROM_BACKEND } from "./constants";

const initState = {
    "routes": [
        {
            "id": 0,
            "name": "test",
            "points": [
                    {"point":[55.02942,82.92646],"type":"wayPoint"},{"point":[55.02947,82.92624],"type":"wayPoint"},{"point":[55.02947,82.92635],"type":"wayPoint"}
            ]
        }
    ]
}


export default function reducer(state = initState, action){
    const {type, payload} = action;

    switch(type){
        case GET_ROUTES_FROM_BACKEND:
            payload.then(response => {
            return {...state, routes: response}
            }
                )
        default: 
            return state;
    }
}