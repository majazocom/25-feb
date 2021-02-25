import { Opacity, WbSunnyRounded } from '@material-ui/icons';
import React, { Component } from 'react';
import '../style/card.css';

class Card extends Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        }
    }

    render() {
        return (
            <div>
                { !this.state.isFlipped ?
                    <section onMouseEnter={() => this.setState({ isFlipped: true })} className="card-container front">
                        <img className="card-image" src={this.props.img} height="200px" width="160px" alt={this.props.imgAlt}></img>
                        <h3 className="card-title">{this.props.title}</h3>
                        <p className="card-text">{this.props.text}</p>
                    </section>
                    :
                    <section onMouseLeave={() => this.setState({ isFlipped: false })} className="card-container back">
                        <Opacity />
                        <p>Vattning</p>
                        <WbSunnyRounded />
                        <p>Soligt läge</p>
                    </section>
                }
            </div>
        )
    }
}

export default Card;