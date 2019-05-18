import { SETUP_CREDENTIAL_USERNAME, SETUP_CREDENTIAL_PASSWORD, SETUP_CREDENTIAL_EMAIL } from "./constants";

export function ActionOfChangeStateCredentials(event) {
    return dispatch => {
        const action = event.target.getAttribute("action");
        const {value} = event.target;

        switch(action){
            case "username_input":
                dispatch(setterUsername(value));
                return;
            case "password_input":
                dispatch(setterPassword(value));
                return;

            case "email_input":
                dispatch(setterEmail(value));
                return;
            default:
                return;
        }
    }
}

export function ActionForStartFetching(){
       
}

function setterUsername(username_value){
    return {
        "type": SETUP_CREDENTIAL_USERNAME,
        "payload": username_value,
    }
}

function setterPassword(password_value){
    return {
        "type": SETUP_CREDENTIAL_PASSWORD,
        "payload": password_value
    }
}

function setterEmail(email_value){
    return {
        "type": SETUP_CREDENTIAL_EMAIL,
        "payload": email_value
    }
}