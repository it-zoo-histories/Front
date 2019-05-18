import React, {Component} from 'react';
import { connect } from 'react-redux';
import MapContainer from '../MapContainer';

// import * as SocketActions from '../../Store/UserSocket/actions';
import { bindActionCreators } from 'redux';
import * as PositionActions from '../../Store/UserPosition/actions';
import * as SendPosition from '../../Store/UserSocket/actions';

class MainPageContainer extends Component{
    constructor(props){
        super(props);
        this.geolocation = navigator.geolocation;
    }
    componentDidMount(){
        // this.props.actions.openRoomToConnect()
    }

    sendStart = () => {
        this.geolocation.getCurrentPosition(location => {
            // this.props.actions.AddNewPosition(location.coords.latitude, location.coords.longitude)
            console.log(location);
            this.props.apiActions.SendCurrentPosition({
                "latitude": location.coords.latitude, 
                "longitude": location.coords.longitude
            })
        },() => {
            this.props.apiActions.SendCurrentPosition({
                "latitude": 55.026444, 
                "longitude": 82.93203729999999
            })

        }
        )
        // this.props.apiActions.SendCurrentPosition(data)
        // this.props.actions.ChangeSend()
    }

    render = () => {
        setTimeout(this.sendStart(), 1000)        
        // console.log("stores: ", this.props);
        return (
            <div className="main_page_container">
                <MapContainer />
            </div>
        )
    }
}

function mapStore(state) {
    return {
        store: state.MPI_mainPageState,
        currentPosition: state.PUI_positionUser,
    }
}

function mapDispatches(dispatch){
    return {
        actions: bindActionCreators(PositionActions, dispatch),
        apiActions: bindActionCreators(SendPosition, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(MainPageContainer)