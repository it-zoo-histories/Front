import React from 'react';

import {connect} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';

import * as AuthFunction from '../../Store/Auth/actions'
import {bindActionCreators} from "redux";


const PrivateRoute = ({component: Component,userActions, isAuthenticated, ...rest}) => {
    // console.log("Private route: Component: ", Component, ", isAuthentificated: ", isAuthenticated, " props: ", rest)
    if (isAuthenticated) {
        console.log("Call get CurrentUser");
        userActions.getCurrentUser()
    }
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...rest} {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    )
};

function mapStore(state) {
    return {
        isAuthenticated: state.AU_authState.isAuthenticated
    }
}

function mapDispatches(dispatch) {
    return {
        userActions: bindActionCreators(AuthFunction, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(PrivateRoute)