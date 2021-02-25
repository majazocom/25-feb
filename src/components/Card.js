import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <section>
                <img src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" height="200px" width="140px" alt="Succulent"></img>
                <p>Aloe Vera Plant</p>
            </section>
        )
    }
}

export default Card;