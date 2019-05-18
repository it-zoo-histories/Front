import React, {Component} from 'react';

import {connect} from 'react-redux';
import Form from '../Form';
import { bindActionCreators } from 'redux';

import * as UserCredentialsActions from '../../Store/UserCredentials/actions';

import './style.scss';

class LoginForm extends Component{
    render = () => {
        const {fields} = this.props.loginStore;
        return(
            <div className="login_form_container">
                <div className="block_authentification">
                    <div className="header">Вход</div>
                    <Form fields={fields} ActionsEntry={this.props.userActions.ActionOfChangeStateCredentials}/>
                </div>
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

function mapDispatches(dispatch){
    return {
        userActions: bindActionCreators(UserCredentialsActions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(LoginForm)