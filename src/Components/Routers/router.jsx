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
import RegistrationForm from '../../Containers/RegistrationForm';
import OAuth2RedirectHandler from "../oauth2/OAuth2RedirectHandler";

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginForm}/>
                <Route path="/signup" component={RegistrationForm}/>
                <PrivateRoute exact path="/" component={MainPageContainer}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    )
}
