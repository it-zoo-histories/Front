import {Component} from 'react'
import React from 'react'
import './styles.css'
import busImage from '../../assets/bus.png'

export default class Header extends Component {


    render() {
        return (
            <nav className="navigation">
                <div className="container">
                    <span className="title">
                        <img src={busImage}/>
                        <span className="name">
                        Stopy-singer
                        </span>
                    </span>

                </div>
            </nav>
        )
    }
}