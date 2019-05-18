import React, {Component} from 'react';
import { connect } from 'react-redux';
import MapContainer from '../MapContainer';

class MainPageContainer extends Component{
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

    }
}

export default connect(mapStore, mapDispatches)(MainPageContainer)