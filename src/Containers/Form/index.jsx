import React, {Component} from 'react';

import './style.scss';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as AuthActions from '../../Store/Auth/actions'

class Form extends Component {
    configureField = (name, previewName, actor, index) => {
        let param = ``;

        console.log(param)
        return (
            <div className="field_section" key={index}>
                {/*<div className={"field_" + name + "_name"}>{previewName}</div>*/}
                <input className={"field_" + name + "_handler"} action={actor} onChange={this.props.ActionsEntry}/>
            </div>
        )
    }

    handleAuthAction = (event) => {
        const target = event.target;
        let action = target.getAttribute("name");
        switch (action) {
            case "login":
                // const loginRequest = Object.assign({}, this.props.credentials);
                let loginRequest = {
                    email: this.props.credentials.name,
                    password: this.props.credentials.password
                };
                this.props.authActions.login(loginRequest);
                break;
            case "register":
                const signUpRequest = Object.assign({}, this.props.credentials);
                this.props.authActions.signup(signUpRequest);
                // this.props.loginFunctions.inputPassword(target.value);
                break;
        }
    };

    render = () => {
        console.log(this.props);
        const {fields} = this.props;

        return (
            <div className="form_container">
                {
                    fields != null ?
                        <div>
                            {fields.map((field, index) => {
                                return (
                                    this.configureField.bind(this)(field.name, field.previewName, field.actor, index)
                                )
                            })}
                            <button className="btn btn-block btn-primary" name={this.props.button} onClick={this.handleAuthAction}> "Ok"</button>
                        </div>

                        :
                        <div className="error_creating">Error of generation form</div>
                }
            </div>
        )
    }
}

function mapStore(state) {
    return {
        store: state.AU_authState,
        credentials: state.UCI_userCredentialsState,
    }
}

function mapDispatches(dispatch) {
    return {
        authActions: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(Form);