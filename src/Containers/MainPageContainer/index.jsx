import React, {Component} from 'react';
import { connect } from 'react-redux';
import MapContainer from '../MapContainer';

import * as SocketActions from '../../Store/UserSocket/actions';
import { bindActionCreators } from 'redux';

class MainPageContainer extends Component{
    componentDidMount(){
        // this.props.actions.openRoomToConnect()
    }
    render = () => {
        return (
            <div className="main_page_container">
                <MapContainer />
            </div>
        )
    }
}

function mapStore(state) {
    return {
        store: state.MPI_mainPageState
    }
}

function mapDispatches(dispatch){
    return {
        actions: bindActionCreators(SocketActions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(MainPageContainer)