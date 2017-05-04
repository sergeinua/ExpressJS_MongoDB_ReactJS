import React, { Component } from 'react';

import marker from '../marker.png';

class Marker extends Component {

    render() {
        //TODO: add img for hovering
        let markerImg = this.props.hovered ? null : marker;

        return (
            <div className="marker-block">
                <img src={markerImg} className="marker-img" alt="marker-img"/>
                <div className="marker-text">{this.props.text}</div>
            </div>
        )
    }
}

export default Marker;