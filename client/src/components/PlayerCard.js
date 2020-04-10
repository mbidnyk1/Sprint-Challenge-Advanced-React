import React, { Component } from 'react';

class PlayerCard extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className = 'card'>
                <div>Name:{this.props.name}</div>
                <div>Country:{this.props.country}</div>
                <div>Searches:{this.props.searches}</div>
            </div>
        )
    }
}

export default PlayerCard