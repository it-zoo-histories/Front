import React, {Component} from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.scss';

import * as headerMenuActions from '../../Store/HeaderPart/actions';

class HeaderMenu extends Component{
    render = () => {
        const {userMenu} = this.props.store;
        return (
            <div className="header_menu">
                {
                    userMenu !== null ?
                        userMenu.map((menuItem, indexItem) => {
                            return (
                                <div className="menu" 
                                actor={menuItem.actor}
                                state={menuItem.state}
                                key={indexItem}
                                onClick={this.props.headerMenuActions.handleClickOpenHeaderMenu.bind(this)}
                                style={{
                                    background: `url(${window.innerWidth < 500 ? menuItem.avatar: null})`,
                                    backgroundSize: `cover`,
                                    backgroundRepeat: `no-repeat`,
                                    width: `30px`,
                                    height: `30px`

                                }}>{window.innerWidth < 500 ? null: menuItem.name}</div>
                            )
                        })
                    :
                    null
                }
            </div>
        )
    }
}

function mapStore(state){
    return {
        store: state.HPI_headerPartState
    }
}

function mapDispatch(dispatch){
    return{
        headerMenuActions: bindActionCreators(headerMenuActions, dispatch)
    }
}

export default connect(mapStore, mapDispatch)(HeaderMenu);