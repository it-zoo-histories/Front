import {GET_ROUTE_FROM_BACKEND} from "./constants";

const initState = {
    "route": {
        id: "hackaton",
        "name": 'test',
    },
    "points": []
}


export default function reducer(state = initState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_ROUTE_FROM_BACKEND:
            console.log("[REDUCER_ROUTES]: ", payload);
            return {...state, points: payload.data, route: payload.route}
        default:
            return state;
    }
}