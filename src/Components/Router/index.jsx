import React from 'react';

import {Switch, Route} from 'react-router-dom';
import MainPageContainer from '../../Containers/MainPageContainer';

export default function Router(){
    return (
        <Switch>
            <Route exact to='/' components={MainPageContainer}/>
        </Switch>        
    )
}
