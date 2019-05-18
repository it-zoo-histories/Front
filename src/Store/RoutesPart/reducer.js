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
        default: 
            return state;
    }
}