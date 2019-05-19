import {Component} from 'react';
import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import HistoryBlock from "../../Components/HistoryBlock/HistoryBlock";
import * as RoutesActions from '../../Store/RoutesPart/actions'

class HistoryBlockContainer extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        console.log("Hisotyr block Container", this.props.value);
        this.props.routesActions.GetRoutesFromBackend(this.props.value)
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <HistoryBlock value={this.props.value}/>
            </div>
        )
    }
}

function mapStore(state) {
    return {
        historyState: state.HI_historyState,
    }
}

function mapDispatches(dispatch) {
    return {
        routesActions: bindActionCreators(RoutesActions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(HistoryBlockContainer)