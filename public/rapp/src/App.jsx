import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';

class App extends Component {

    render() {
        const center = {lat: 50.424, lng: 30.569};

        return (
          <div>
            <Map center={center}/>
          </div>
        );
    }
}

export default App;
