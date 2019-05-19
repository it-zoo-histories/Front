import {Component} from 'react'
import React from 'react'
import {connect} from 'react-redux';
import {
    withGoogleMap,
    GoogleMap,
    Marker, withScriptjs,
} from "react-google-maps";

import * as RoutersActions from '../../Store/RoutesPart/actions'
import {bindActionCreators} from "redux";


const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: 55, lng: 82}}
    >

        {props.points.map(function (element) {
            console.log("POINT on map: ", element)
            return <Marker position={{lat: element.point[1], lng: element.point[0]}}/>
        })}
    </GoogleMap>
));


class MapGoogle extends Component {

    render() {
        return (
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVDIDgBruUmqbhE9ZSeq8DA-Hf-RYy0uk&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                points = {this.props.store.points}
            />
        )
    }
}

function mapStore(state) {
    return {
        store: state.RPI_routesPartState,
        storePos: state.PUI_positionUser,
    }
}

function mapDispatches(dispatch) {
    return {
        routesService: bindActionCreators(RoutersActions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(MapGoogle)