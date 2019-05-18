import React, {Component} from 'react';

import {connect} from 'react-redux';
import Form from '../Form';
import {bindActionCreators} from 'redux';

import * as UserCredentialsActions from '../../Store/UserCredentials/actions';

import './style.scss';
import {Link, Redirect} from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

class LoginForm extends Component {
    render = () => {
        if (this.props.isAuthenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: {from: this.props.location}
                }}/>;
        }
        const {fields} = this.props.loginStore;
        return (
            <div className="login_form_container">
                <div className="block_authentification">
                    <div className="header">Вход в Stopy-singer</div>
                    <SocialLogin/>
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <Form fields={fields} ActionsEntry={this.props.userActions.ActionOfChangeStateCredentials}
                          button={this.props.loginStore.button_send}/>
                          <div className="link">
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                          </div>
                </div>
            </div>
        )
    }
}

function mapStore(state) {
    return {
        loginStore: state.LPI_loginPageState,
        isAuthenticated: state.AU_authState.isAuthenticated
    }
}

function mapDispatches(dispatch) {
    return {
        userActions: bindActionCreators(UserCredentialsActions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(LoginForm)