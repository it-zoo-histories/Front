import React, {Component} from 'react';

import {geolocated} from 'react-geolocated';

import {sendDataToRoom} from '../../Store/UserSocket/constants';

import SockJsClien from 'react-stomp';

class Geolocation extends Component{
    sendDataToBackend = (lat, long) => {
        console.log("long: ", long, "; lat: ", lat);
        this.sendMessage({"longitude": long, "latitude": lat})
    }

    sendMessage = (msg) => {
        console.log("start sending new data to backend")
        this.clientRef.sendMessage('test', msg)
    }

    render = ( ) => {
        console.log(this.props);
        // const {latitude} = this.props.coords;
        return (
            <div className="geolocation_status">
                <SockJsClien url='http://192.168.46.85:8888/chat' topics={['/topic/test']}
                    onMessage={(msg) => { console.log(msg); }}
                    ref={ (client) => { this.clientRef = client }} />
                {this.props.coords ?
                this.sendDataToBackend(this.props.coords.latitude, this.props.coords.longitude)
                :

                null   
            }
            </div>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocation);