import React, {Component} from 'react';
import {connect} from 'react-redux';
import MapContainer from '../MapContainer';
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import Header from "../../Components/Header/Header";

class MainPageContainer extends Component {
    render = () => {
        return (
            <div className="main_page_container">
                <Header/>
                <SearchPanel/>
                <MapContainer/>
            </div>
        )
    }
}

function mapStore(state) {
    return {
        store: state.MPI_mainPageState
    }
}

function mapDispatches(dispatch) {
    return {}
}

export default connect(mapStore, mapDispatches)(MainPageContainer)