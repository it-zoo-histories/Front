import {Component} from 'react'
import React from 'react'
import './styles.css'

export default class Header extends Component {


    render() {
        return (
            <nav className="navigation">
                <div className="container">
                    <span className="title">
                        <i className="fa fa-home"></i> Administrator
                    </span>
                </div>
            </nav>
        )
    }
}