import React, { Component } from 'react';

import './Main-page.css';
import Map from '../components/Map';
import ItemList from '../components/Item-list';
import Menu from '../components/Menu';
import Filter from '../components/Filter';
import FilterList from '../components/Filter-list';
import Loader from '../components/Loader';
import ItemListSkeleton from '../components/Item-list-skeleton';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            singleItemId: null,
            itemHoveredId: null,
            filterListCondition: null,
            filterMinRooms: null,
            filterMaxRooms: null,
            filterMinPrice: null,
            filterMaxPrice: null,
            districts: null,
            filterDistrict: null,
            filterType: null
        };
    }

    componentDidMount() {
        this.getItems();
        this.getDistricts();
    }

    getItems() {
        fetch('/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sort: this.state.filterListCondition,
                filterMinRooms: this.state.filterMinRooms,
                filterMaxRooms: this.state.filterMaxRooms,
                filterMinPrice: this.state.filterMinPrice,
                filterMaxPrice: this.state.filterMaxPrice,
                filterDistrict: this.state.filterDistrict,
                filterType: this.state.filterType
            })
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

    handleFilterListSorting(condition) {
        let promise = new Promise((resolve, reject) => {
            this.setState({
                items: null,
                filterListCondition: condition
            });
            resolve();
        });

        promise.then(() => {
            this.getItems();
        });
    }

    handleFilterCondition(state) {
        let promise = new Promise((resolve, reject) => {
            this.setState({
                filterMinRooms: state.filterMinRooms,
                filterMaxRooms: state.filterMaxRooms,
                filterMinPrice: state.filterMinPrice,
                filterMaxPrice: state.filterMaxPrice,
                filterDistrict: state.filterDistrict,
                filterType: state.filterType
            });
            resolve();
        });

        promise.then(() => {
            this.getItems();
        });
    }

    getDistricts() {
        fetch('/district', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((resp) => {
            return resp.json();
        }).then((districts) => {
            this.setState({districts: districts});
        });
    }

    render() {
        const center = {lat: 50.424, lng: 30.569};

        return (
            <div className="AppTemplate">
                <div className="SplitMapTemplate mobile-header-padding map-view">
                    <Menu/>
                    <Filter
                        handleFilterCondition={this.handleFilterCondition.bind(this)}
                        districts={this.state.districts}/>
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
                                    <FilterList handleFilterListSorting={this.handleFilterListSorting.bind(this)}/>
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

export default MainPage;