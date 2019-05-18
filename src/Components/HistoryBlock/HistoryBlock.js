import {Component} from 'react';
import React from 'react';

export default class HistoryBlock extends Component {


    render() {
        return (
            <div className="block">
                {this.props.value}
            </div>
        )
    }

}