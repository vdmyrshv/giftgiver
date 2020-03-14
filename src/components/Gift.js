import React, { Component } from 'react'

export default class Gift extends Component {
    
    state = {
        person: "",
        present: ""
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        const { removeGift, id } = this.props;
        return (
            <div className="gift-form">
                <h2>Gift {this.props.id}</h2>
                <form className="gift-form__fieldset" onSubmit={this.handleSubmit}>
                    <div className="gift-form__form-group">
                        <label for="person"></label>
                        <input 
                            type="text" 
                            name="person"
                            onChange={event => this.setState({person: event.target.value})} 
                            id="person" 
                            className="gift-form__input gift-form__input--person" 
                            placeholder="Person"
                            value={this.state.person}
                        />
                        <button type="submit" className="gift-form__button-submit">Submit</button>
                    </div>
                    <div className="gift-form__form-group">
                        <label for="present"></label>
                        <input 
                            type="text" 
                            onChange={event => this.setState({present: event.target.value})} 
                            id="present" 
                            className="gift-form__input gift-form__input--present" 
                            value={this.state.present}
                            placeholder="Present"
                            name="present"
                        />
                        <button type="submit" className="gift-form__button-submit">Submit</button>  
                    </div>
                    <button className="gift-form__button-delete" onClick={()=>removeGift(id)}>Delete</button>
                </form>
            </div>
        )
    }
}
