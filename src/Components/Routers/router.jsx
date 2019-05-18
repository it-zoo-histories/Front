import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import PrivateRoute from './private_router';

import MainPageContainer from '../../Containers/MainPageContainer';
import ErrorPage from '../../Containers/ErrorPage';
import LoginForm from '../../Containers/LoginForm';

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route to="/login" component={LoginForm}/>
                <PrivateRoute exact to="/" component={MainPageContainer}/>                
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    )
}
