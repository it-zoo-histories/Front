import React from 'react';

import {connect} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    console.log("Private route: Component: ", Component, ", isAuthentificated: ", isAuthenticated, " props: ", rest)
    return(
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

function mapStore(state){
    return {
        store: state.UI_userState.isAuthentificated
    }
}

export default connect(mapStore)(PrivateRoute)