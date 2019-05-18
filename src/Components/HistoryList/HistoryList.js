import {Component} from 'react';
import React from 'react';
import HistoryBlock from "../HistoryBlock/HistoryBlock";


export class HistoryList extends Component {


    render() {
        <div className="history">
            {this.props.items.map(function (item) {
                return <HistoryBlock name={item}/>
            })}
        </div>
    }
}