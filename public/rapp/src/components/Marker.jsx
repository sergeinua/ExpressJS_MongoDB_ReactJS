import React, { Component } from 'react';

import marker from '../marker.png';
import markerHover from '../markerHover.png';

class Marker extends Component {

    render() {
        let markerImg = this.props.hovered ? markerHover : marker;

        return (
            <div className="marker-block">
                <img src={markerImg} className="marker-img" alt="marker-img"/>
                <div className="marker-text">{this.props.text}</div>
            </div>
        )
    }
}

export default Marker;