import React, { Component } from 'react';
import '../style/card.css';

class Card extends Component {
    render() {
        return (
            <section className="card-container">
                <img className="card-image" src={this.props.img} height="200px" width="140px" alt={this.props.imgAlt}></img>
                <p className="card-text">{this.props.text}</p>
            </section>
        )
    }
}

export default Card;