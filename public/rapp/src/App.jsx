import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
import ItemList from './components/Item-list';
import Menu from './components/Menu';
import Filter from './components/Filter';
import FilterList from './components/Filter-list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            singleItemId: null,
            itemHoveredId: null
        };
    }

    componentDidMount() {
        fetch('/', {
            method: 'POST'
        }).then((resp) => {
            return resp.json();
        }).then((items) => {
            this.setState({items: items});
        });
    }

    handleMarkerClick (key, childProps) {
        this.setState({singleItemId: childProps.id});
        this.handleItemHover(childProps.id);
    }

    handleItemHover(itemId) {
        this.setState({itemHoveredId: itemId});
    }

    handleItemUnHover() {
        this.setState({
            itemHoveredId: null,
            singleItemId: null
        });
    }

    render() {
        const center = {lat: 50.424, lng: 30.569};

        return (
            <div className="AppTemplate">
                <div className="SplitMapTemplate mobile-header-padding map-view">
                    <Menu/>
                    <Filter/>
                    <div className="map-wrapper right-sidebar-active">
                        <Map center={center} markers={this.state.items} handleMarkerClick={this.handleMarkerClick.bind(this)}
                             hoveredMarkerId={this.state.itemHoveredId}/>
                    </div>
                    <div className="right-sidebar right-sidebar-active" id="right-sidebar">
                        <div className="HybridMapPage" id="HybridMapPage">
                            <div className="HybridMapPage-secondary-nav-wrapper">
                                <div className="SecondaryNav SecondaryNav-fixed">
                                    <div className="SecondaryNav-breadcrumbs-wrapper Utils-text-overflow short">
                                    <div className="AreaBreadcrumbs">
                                        <ul className="HpBreadcrumb Utils-text-overflow">
                                            <li className="HpBreadcrumb-item">
                                                <span className="TinyText">
                                                    <span className="link-style">Kiev</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <FilterList/>
                                    <span className="SecondaryNav-map-list-toggle">List</span>
                                </div>
                            </div>
                            <ItemList singleItemId={this.state.singleItemId} items={this.state.items}
                                      handleItemHover={this.handleItemHover.bind(this)}
                                      handleItemUnHover={this.handleItemUnHover.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
