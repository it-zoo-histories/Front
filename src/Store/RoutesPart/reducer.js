const initState = {
    "routes": [
        {
            "id": 0,
            "name": "test",
            "points": [
                [
                    55.213,
                    65.34
                ],
                [
                    55.215,
                    65.4
                ]
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