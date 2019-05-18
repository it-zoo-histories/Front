const initState = {
    "currentUser": null,
    "isAuthentificated": false,
    "accessToken": null
}

export default function reducer(state = initState, action){
    const {type, payload} = action;

    switch(type){
        default:
            return state
    }
}