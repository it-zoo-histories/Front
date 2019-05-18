const initState = {
    "routes": [
        {
            "id": 0,
            "name": "test",
            "points": [
                [
                    {"point":[82.92646, 55.02942],"type":"wayPoint"},
                    {"point":[82.92624, 55.02947],"type":"wayPoint"},
                    {"point":[82.92635, 55.02947],"type":"wayPoint"}]
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