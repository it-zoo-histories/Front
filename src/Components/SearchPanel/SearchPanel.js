import {Component} from 'react'
import React from 'react';
import "./styles.css"

export default class SearchPanel extends Component {

    render() {
        return (
            <div className="search-box" id="SBox">
                <input id="search" placeholder="Search..." type="text"/>
                <span className="input-group-btn">
                    <div className="also search-link" type="button"></div>
                </span>
            </div>
        )
    }
}

