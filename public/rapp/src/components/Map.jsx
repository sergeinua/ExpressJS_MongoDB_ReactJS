import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {lat: 50.424, lng: 30.569},
            zoom: 11,
            markers: null
        }
    }

    componentWillMount() {
        if (this.props.center) {
            this.setState({center: this.props.center});
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({markers: nextProps.markers});
    }

    render() {

        return (
            <GoogleMapReact
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                style={{height: '300px'}}
                onChildClick={this.props.handleMarkerClick}>
                {this.state.markers ? (
                    this.state.markers.map((item, index) => {
                        return <Marker
                                    lat={parseFloat(item.coordinates.lat)}
                                    lng={parseFloat(item.coordinates.lng)}
                                    text={parseInt(item.price)}
                                    key={"marker-" + index}
                                    id={item._id}
                                    hovered={this.props.hoveredMarkerId == item._id ? true : false}/>
                    })
                ) : (null)}
            </GoogleMapReact>
        );
    }
}

export default Map;