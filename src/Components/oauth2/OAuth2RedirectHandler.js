import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import * as AuthFunctions from '../../Store/Auth/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {ACCESS_TOKEN} from "../../Store/API/constants";

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        const results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        console.log("Oauth redirect", token);
        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            this.props.authFunctions.inverseAuthenticated();

            return <Redirect to={{
                pathname: "/",
                state: {from: this.props.location}
            }}/>;
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: {
                    from: this.props.location,
                    error: error
                }
            }}/>;
        }
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        authFunctions: bindActionCreators(AuthFunctions, dispatch)
    }
}

export default connect(null, DispatchActionsToProps)(OAuth2RedirectHandler)