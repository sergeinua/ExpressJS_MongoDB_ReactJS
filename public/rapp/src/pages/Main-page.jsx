import React, { Component } from 'react';

import './Main-page.css';
import Map from '../components/Map';
import ItemList from '../components/Item-list';
import Menu from '../components/Menu';
import Filter from '../components/Filter';
import FilterList from '../components/Filter-list';

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
        //show item list skeleton
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
        this.state.items.map((item) => {
            if (childProps.id == item._id) {
                this.setState({singleItem: item});
            }
        });
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

    handleSingleItemClick(state) {
        this.setState({singleItem: state});
    }

    handleCloseSingleItem() {
        this.setState({singleItem: null});
    }

    render() {
        const center = {lat: 50.424, lng: 30.569};

        return (
            <div className="AppTemplate">
                <div className="SplitMapTemplate mobile-header-padding map-view">
                    <Menu/>
                    <div className={window.innerWidth < 768 ? "Row" : ""}>
                        <Filter
                            handleFilterCondition={this.handleFilterCondition.bind(this)}
                            districts={this.state.districts}/>
                    </div>
                    <div className="map-wrapper right-sidebar-active">
                        {window.innerWidth > 767 &&
                        <Map center={center} markers={this.state.items}
                             handleMarkerClick={this.handleMarkerClick.bind(this)}
                             hoveredMarkerId={this.state.itemHoveredId}/>
                        }
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
                                                    <span className="link-style">Киев</span>
                                                </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="SecondaryNav-close-btn">
                                        <button className="Button Button-sm Button-default" onClick={() => this.handleCloseSingleItem()}>Закрыть</button>
                                    </div>
                                    {!this.state.singleItem &&
                                        <FilterList handleFilterListSorting={this.handleFilterListSorting.bind(this)}/>
                                    }
                                    {this.state.singleItem &&
                                        <span className="SecondaryNav-map-list-toggle"
                                              onClick={this.handleCloseSingleItem.bind(this)}>List</span>
                                    }
                                </div>
                            </div>
                            <ItemList
                                handleSingleItemClick={this.handleSingleItemClick.bind(this)}
                                singleItem={this.state.singleItem}
                                items={this.state.items}
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