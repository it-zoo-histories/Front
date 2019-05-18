import React, {Component} from 'react';
import { YMaps } from 'react-yandex-maps'; 
import {connect} from 'react-redux';

class MapContainer extends Component{
    render = () => {
        return (
            <div className="map_container">
                <div className="header">Yandex Map</div>
                <YMaps>
                    <div className="test">TURURU</div>
                </YMaps>
            </div>
        )
    }
}

function mapStore(state){
    return {
        
    }
}

export default connect(mapStore)(MapContainer)