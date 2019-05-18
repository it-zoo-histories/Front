import React,{Component} from 'react';
import { connect } from 'net';



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

export default connect(mapStore)(MainPageContainer)