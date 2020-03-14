import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { max_number } from '../helper'

import Gift from './Gift'

export default class App extends Component {

    state = {
       gifts: [] 
    }

    addGift = () => {
        const { gifts } = this.state;

        const ids = this.state.gifts.map(gift => gift.id);

        const max_id = max_number(ids);

        gifts.push({id: max_id + 1});

        this.setState({ gifts });
    }

    removeGift = id => {
        this.setState({ gifts: this.state.gifts.filter(gift => gift.id !== id) });
    }


    render() {
        return (
            <div className="main-section">
                <h2>Gift Giver</h2>
                <Button onClick={this.addGift} className="btn-add"> Gifts : {this.state.gifts.length}</Button>
                <div className="gift-list">
                    {this.state.gifts.map(gift => (
                        <Gift key={gift.id} id={gift.id} removeGift={this.removeGift} />
                    ))}
                </div>
            </div>
        )
    }
}
