import React, {Component} from 'react';

import {YMaps, Map, RouteEditor, GeoObject} from 'react-yandex-maps';

import {connect} from 'react-redux';

import * as RoutesActions from '../../Store/RoutesPart/actions';

import './style.scss';
import {bindActionCreators} from 'redux';

class MapContainer extends Component {
    constructor(props) {
        super(props);

        // this.setState({
        //     map: null,
        //     ymap: null
        // })
        this.map = null
        this.ymaps = null
        this.handleApiAvaliable = this.handleApiAvaliable.bind(this);
    }

    handleClick = (event) => {
        console.log("Map clicked: ", event.target)
    }

    componentDidMount() {
        this.props.routesService.GetRoutesFromBackend("hackaton")
    }

    handleApiAvaliable = ymaps => {
        console.log("First", ymaps)
        if (ymaps) {
            this.ymaps = ymaps;
        }
        // this.setState({
        //     ymaps: ymaps,
        // })
        console.log("create connect", this.props.store)
        const {route, points} = this.props.store;

        console.log("Points", points);
        this.addRouteToMap(ymaps, {
            name: route.name,
            points: points
        })
    };

    addRouteToMap = (ymap, route) => {

        const balloonContentBodyLayout = ymap.templateLayoutFactory.createClass(
            `<div>${route.name}</div>`
        );
        console.log("Points Route: ", route.points);
        try {
            console.log("Ymap", ymap)
            ymap.route(
                route.points,
                {
                    balloonContentBodyLayout
                }
            ).then(route => {
                console.log("Blyyaaaa zaebaloooo")
                route.getPaths().options.set({
                    // в балуне выводим только информацию о времени движения с учетом пробок
                    // можно выставить настройки графики маршруту
                    strokeColor: "0000ffff",
                    opacity: 0.9
                });
                console.log("[ADD] point to map");
                // добавляем маршрут на карту
                this.map.geoObjects.add(route);
            })
        } catch (error) {
            console.log(error)
        }
    }


    render = () => {
        const {longitude, latitude} = this.props.storePos;

        // this.addObjectOnMap({longitude: longitude, latitude: latitude})

        if (this.ymaps) {
            this.handleApiAvaliable(this.ymaps);
            console.log("Get Dotes")
            // this.handleApiAvaliable(this.ymaps);
            // this.setState({
            //     map: null,
            //     ymaps: null
            // })

            return (
                <div className="map_container">
                    {/*<div className="header">Route Signaller</div>*/}
                    <YMaps
                        onApiAvailable={ymaps => this.handleApiAvaliable(ymaps)}
                        preload={true}
                    >
                        <Map
                            width={window.outerWidth - 10}
                            height={window.outerHeight - 100}
                            state={{center: [55.02942, 82.92646], zoom: 16}} onClick={this.handleClick.bind(this)}
                            instanceRef={ref => (this.map = ref)}
                        >
                            <RouteEditor/>
                        </Map>
                    </YMaps>
                </div>
            )
        }
        return (
            <div className="map_container">
                {/*<div className="header">Route Signaller</div>*/}
                <YMaps
                    onApiAvaliable={ymaps => this.handleApiAvaliable(ymaps)}
                    preload={true}
                >
                    <Map
                        width={window.outerWidth - 10}
                        height={window.outerHeight - 100}
                        state={{center: [55.02942, 82.92646], zoom: 16}} onClick={this.handleClick.bind(this)}
                        instanceRef={ref => (this.map = ref)}
                    >
                        <RouteEditor/>
                    </Map>
                </YMaps>
            </div>
        )
    }
}

function mapStore(state) {
    return {
        store: state.RPI_routesPartState,
        storePos: state.PUI_positionUser
    }
}

function mapDispatches(dispatch) {
    return {
        routesService: bindActionCreators(RoutesActions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(MapContainer)