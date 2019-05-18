import React, {Component} from 'react';

import { YMaps, Map, RouteEditor } from 'react-yandex-maps'; 
import {connect} from 'react-redux';

import './style.scss';

class MapContainer extends Component{
    constructor(props){
        super(props);

        this.map = null
        this.ymaps = null
    }

    handleClick = (event) => {
        console.log("Map clicked: ", event.target)   
    }

    handleApiAvaliable = ymaps => {

        const {routes} = this.props.store;

        for(let i = 0; i < routes.length; i++){
            this.addRouteToMap(ymaps, routes[i])
        }
      };

    addRouteToMap = (ymap, route) => {
        const balloonContentBodyLayout = ymap.templateLayoutFactory.createClass(
        `<div>${route.name}</div>`
      ); 
        console.log("Points: ", route.points);
        ymap
          .route(
                route.points,
                {
                    balloonContentBodyLayout
                }
          )
          .then(route => {
            route.getPaths().options.set({
              // в балуне выводим только информацию о времени движения с учетом пробок
              // можно выставить настройки графики маршруту
              strokeColor: "0000ffff",
              opacity: 0.9
            });
    
            // добавляем маршрут на карту
            this.map.geoObjects.add(route);
          });
    }

    mapAvailable = (ymap) => {

        console.log("start route creating", ymap)
        let param = ymap.templateLayoutFactory.createClass(
            "<div>Test</div>"
          );
        ymap.route(
            [],{
               param 
            }).then((route) => {
            route.getPaths().options.set({
                strokeColor: "0000ffff",
                opacity: 0.9
              });
            
            this.map.geoObjects.add(route)
        }) 
    }

    render = () => {
        return (
            <div className="map_container">
                <div className="header">Route Signaller</div>
                <YMaps 
                onApiAvaliable={ymaps => this.handleApiAvaliable(ymaps)}
                >
                    <Map width={800}
                    height={500} 
                    state={{center: [55.013571, 83.057512], zoom: 10 }} onClick={this.handleClick.bind(this)}
                    instanceRef={ref => (this.map = ref)}
                    >
                        <RouteEditor />
                    </Map>
                </YMaps>
            </div>
        )
    }
}

function mapStore(state){
    return {
        store: state.RPI_routesPartState
    }
}

export default connect(mapStore)(MapContainer)