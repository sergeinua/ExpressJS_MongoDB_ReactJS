import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {lat: 50.424, lng: 30.569},
            zoom: 11
        }
    }

    handleChildClick (key, childProps) {
        alert(1);
    }

    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                style={{height: '300px'}}
                onChildClick={this.handleChildClick}
            >
                <Marker
                    lat={50.41813704110631}
                    lng={30.544186234474182}
                    text={'2500'}
                />
            </GoogleMapReact>
        );
    }
}

export default Map;

