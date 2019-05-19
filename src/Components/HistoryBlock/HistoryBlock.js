import {Component} from 'react';
import React from 'react';
import './styles.css'

export default class HistoryBlock extends Component {


    render() {
        return (
            <div className="block">
                {this.props.value}
            </div>
        )
    }

}