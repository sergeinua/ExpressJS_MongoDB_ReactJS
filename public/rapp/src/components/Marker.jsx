import React, { Component } from 'react';

import marker from '../marker.png';

class Marker extends Component {

    render() {
        return (
            <div className="marker-block">
                <img src={marker} className="marker-img" alt="marker-img"/>
                <div className="marker-text">{this.props.text}</div>
            </div>
        )
    }
}

export default Marker;