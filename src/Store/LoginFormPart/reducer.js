const initState = {
    "fields": [
        {
            "name": "username",
            "actor": "username_input",
            "previewName": "Имя пользователя"
        },
        {
            "name": "password",
            "actor": "password_input",
            "previewName": "Пароль"
        }
    ],
    "button_send": "login"
}

export default function reducer(state = initState, action){
    const {type, payload} = action;

    switch(type){
        default:
            return state;
    }
}