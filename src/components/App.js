import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class App extends Component {

    state = {
       gifts: [] 
    }

    addGift = () => {
        const { gifts } = this.state;

        const ids = this.state.gifts.map(gift => gift.id);

        const max_id = ids.length > 0 ? Math.max(...ids) : 0;

        gifts.push({id: max_id + 1});

        this.setState({ gifts });
    }


    render() {
        return (
            <div className="main-section">
                <h2>Gift Giver</h2>
                <Button onClick={this.addGift} className="btn-add">Add Gift</Button>
            </div>
        )
    }
}
