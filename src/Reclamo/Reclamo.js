import React, { Component } from 'react';
import PrintReclamo from './PrintReclamo.js';
import fire from '../config/fire.js'

class Reclamo extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        console.log(items)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({ text: e.target.value });

    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
        const horas = new Date().toLocaleString();
        const newMessageKey = fire.database().ref().child('postclaim').push().key;
        fire.database().ref(`postclaim/${newMessageKey}`).set({
            text: this.state.text,
            year: horas
        })

    }
    render() {
        return (
            <div>
                <h3>Reclamo</h3>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Reportar Cajero
            </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Enviar
                    </button>
                   
                    <PrintReclamo items={this.state.items} />
                </form>
            </div>
        );
    }


}

export default Reclamo;