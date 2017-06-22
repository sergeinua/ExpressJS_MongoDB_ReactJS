import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './Home-page.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/map">Map</Link>
            </div>
        );
    }
}

export default HomePage;