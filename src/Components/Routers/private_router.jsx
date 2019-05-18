import React from 'react';

import {connect} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    console.log("Private route: Component: ", Component, ", isAuthentificated: ", isAuthenticated, " props: ", rest)
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

export default connect(mapStore)(PrivateRoute)