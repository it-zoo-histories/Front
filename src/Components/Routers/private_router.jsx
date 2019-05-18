import React, {Component} from 'react';

import {connect} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';

class PrivateRoute extends Component {
    render = () => {
        const {isAuthentificated} = this.props.store;
        console.log(this.props);
        return (
            isAuthentificated ?
            <Route {...this.props}/>
            :
            <Redirect to='/login'/>
        )
    }
}

function mapStore(state){
    return {
        store: state.UI_userState
    }
}

export default connect(mapStore)(PrivateRoute)