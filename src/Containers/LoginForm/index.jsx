import React, {Component} from 'react';

import {connect} from 'react-redux';
import Form from '../Form';

class LoginForm extends Component{
    render = () => {
        const {fields} = this.props.loginStore;
        return(
            <div className="login_form_container">
                <Form fields={fields}/>
            </div>
        )
    }
}

function mapStore(state) {
    return {
        store: state.UI_userState,
        loginStore: state.LPI_loginPageState
    }
}

export default connect(mapStore)(LoginForm)