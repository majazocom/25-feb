import React, { Component } from 'react';
import '../style/card.css';

class Card extends Component {
    render() {
        return (
            <section className="card-container">
                <img className="card-image" src={this.props.img} height="200px" width="160px" alt={this.props.imgAlt}></img>
                <h3 className="card-title">{this.props.title}</h3>
                <p className="card-text">{this.props.text}</p>
            </section>
        )
    }
}

export default Card;