import React, {Component} from 'react';
import { connect } from 'react-redux';

class MainPageContainer extends Component{
    render = () => {
        return (
            <div className="main_page_container">
                <h1>Start Coding</h1>
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