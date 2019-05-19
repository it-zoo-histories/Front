import {Component} from 'react'
import React from 'react'
import './styles.scss'
import busImage from '../../assets/bus.png'

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as HeaderMenuActions from '../../Store/HeaderPart/actions';
import HeaderMenu from '../HeaderMenu';

class Header extends Component {
    constructor(props){
        super(props);

        console.log("start building component");
    }
    handleOpen = (event) => {
        console.log("Opened menu")
        // let state = event.target.getAttribute("openUserMenu");        
        this.props.headerActions.changeStateHeaderMenu(true);
    }
    render() {
        console.log("[HEADER]: ", this.props.store); 
        const {openUserMenu} = this.props.store;
        return (
            <nav clduassName="navigation">
                <div className="container">
                    <span className="title">
                        <img src={busImage} alt="main_logo"/>
                        <span className="name">
                        Stopy-singer
                        </span>
                        <div 
                            className="user_menu_stater" 
                            openUserMenu={openUserMenu}
                            onClick={this.handleOpen.bind(this)}
                            style={{textAlign: "right"}}>Меню</div>  
                    </span>
                <div className="user_menu_container">
                    {
                        openUserMenu ?
                        <HeaderMenu />
                        :
                        null
                    }
                </div>

                </div>
            </nav>
        )
    }
}


function mapStore(state){
    return{
        store: state.HPI_headerPartState
    }
}

function mapDispatches(dispatch){
    return {
        headerActions: bindActionCreators(HeaderMenuActions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(Header);