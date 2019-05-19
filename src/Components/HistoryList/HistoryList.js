import {Component} from 'react';
import React from 'react';
import HistoryBlock from "../HistoryBlock/HistoryBlock";
import './styles.css'
import HistoryBlockContainer from "../../Containers/HistoryBlockContainer";

export class HistoryList extends Component {

    constructor(props) {
        super(props);

    }

    // createBlocks() {
    //     let boards = this.props.boards;
    //     console.log("Boardds in projjject",boards);
    //     return boards.map(function(element) {
    //         return <HistoryBlock value={element.name} />
    //     })
    // }

    render() {

        if (this.props.items) {
            console.log("items", this.props.items)
            return (
                <div className="container-history">
                    <div className="history">
                        {
                            this.props.items.map(function (item) {
                                return <HistoryBlockContainer value={item.name}/>
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="history"/>
            )
        }

    }
}