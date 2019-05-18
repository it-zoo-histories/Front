import {Component} from 'react';
import React from 'react';
import HistoryBlock from "../HistoryBlock/HistoryBlock";


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
                <div className="history">
                    {
                        this.props.items.map(function (item) {
                        return <HistoryBlock value={item.name}/>
                    })
                    }
                </div>
            )
        } else {
            return (
                <div className="history"/>
            )
        }

    }
}