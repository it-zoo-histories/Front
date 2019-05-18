const initState = {
    "currentUser": null,
    "isAuthentificated": true,
    "accessToken": null
}

export default function reducer(state = initState, action){
    const {type, payload} = action;

    switch(type){
        default:
            return state
    }
}