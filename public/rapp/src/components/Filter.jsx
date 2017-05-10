import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMinRooms: null,
            filterMaxRooms: null,
            filterMinPrice: null,
            filterMaxPrice: null,
            filterDistrict: null,
            filterType: null
        };
    }

    handleSelectChange(filter, event) {
        let promise = new Promise((resolve) => {
            if (filter === 'filterDistrict' && event.target.value === '') {
                resolve(this.setState({filterDistrict: this.props.districts}));
            } else {
                resolve(this.setState({[filter]: event.target.value}));
            }
        });

        promise.then(() => {
            this.handleApplyFilters();
        });
    }

    handleApplyFilters() {
        this.props.handleFilterCondition(this.state);
    }

    render() {
        const svgStyle = {
            width: 12 + 'px',
            height: 12 + 'px'
        };
        const spanStyle = {
            display: 'inline-block',
            verticalAlign: 'middle',
            lineHeight: 0
        };

        return (
            <section className="FilterNav">
                <div className="Row">
                    <nav className="filter-nav show-for-medium-up">
                        <div className="search-input-wrapper">
                            <div className="AutocompleteSearchInput">
                                <span className="AutocompleteSearchInput-geolocate-btn">
                                    <i className="Geolocation icon-location geolocate-autocomplete-search"></i>
                                </span>
                                <input type="text" className="AutocompleteSearchInput-search-input"
                                       placeholder="Find apartments in..."
                                       value="San Francisco, CA" />
                                <button className="AutocompleteSearchInput-search-submit">
                                    <span className="AutocompleteSearchInput-icon-search-btn">
                                        <i className="icon-search"></i>
                                    </span>
                                </button>
                                <div className="AutocompleteSearchInput-suggestions Utils-hidden">
                                    <ul className="AutocompleteSearchInput-list"></ul>
                                </div>
                            </div>
                        </div>
                        <div className="filter-options">
                            <div className="filter-criteria">
                                <div className="Select-input-container">
                                    <select className="Select-input Select-sm Select-no-label"
                                            onChange={(event) => this.handleSelectChange('filterType', event)}
                                            value={this.state.filterType}>
                                        <option value="">Any</option>
                                        <option value="rent">Rent</option>
                                        <option value="sale">Sale</option>
                                    </select>
                                    <span className="Select-dropdown-arrow Select-sm">
                                        <span style={spanStyle}>
                                            <svg className="Svg" fill="currentColor" style={svgStyle} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <path d="M95.87 25.42l-.12.11L50 70.46 4.26 25.55l-.12-.11a1.92 1.92 0 0 0-2.56.1A1.84 1.84 0 0 0 1.45 28l.12.12 47.07 46.32a1.94 1.94 0 0 0 2.71 0l47.1-46.24.12-.12a1.84 1.84 0 0 0-.1-2.51 1.92 1.92 0 0 0-2.56-.1z"/>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="filter-criteria">
                                <div className="Select-input-container">
                                    <select className="Select-input Select-sm Select-no-label"
                                            onChange={(event) => this.handleSelectChange('filterMinPrice', event)}
                                            value={this.state.filterMinPrice}>
                                        <option value="">Min price</option>
                                        <option value="3000">3000</option>
                                        <option value="5000">5000</option>
                                        <option value="7000">7000</option>
                                        <option value="8000">8000</option>
                                        <option value="10000">10000</option>
                                    </select>
                                    <span className="Select-dropdown-arrow Select-sm">
                                        <span style={spanStyle}>
                                            <svg className="Svg" fill="currentColor" style={svgStyle} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <path d="M95.87 25.42l-.12.11L50 70.46 4.26 25.55l-.12-.11a1.92 1.92 0 0 0-2.56.1A1.84 1.84 0 0 0 1.45 28l.12.12 47.07 46.32a1.94 1.94 0 0 0 2.71 0l47.1-46.24.12-.12a1.84 1.84 0 0 0-.1-2.51 1.92 1.92 0 0 0-2.56-.1z"/>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="filter-criteria">
                                <div className="Select-input-container">
                                    <select className="Select-input Select-sm Select-no-label"
                                            onChange={(event) => this.handleSelectChange('filterMaxPrice', event)}
                                            value={this.state.filterMaxPrice}>
                                        <option value="">Max price</option>
                                        <option value="3000">3000</option>
                                        <option value="5000">5000</option>
                                        <option value="7000">7000</option>
                                        <option value="8000">8000</option>
                                        <option value="10000">10000</option>
                                    </select>
                                    <span className="Select-dropdown-arrow Select-sm">
                                        <span style={spanStyle}>
                                            <svg className="Svg" fill="currentColor" style={svgStyle} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <path d="M95.87 25.42l-.12.11L50 70.46 4.26 25.55l-.12-.11a1.92 1.92 0 0 0-2.56.1A1.84 1.84 0 0 0 1.45 28l.12.12 47.07 46.32a1.94 1.94 0 0 0 2.71 0l47.1-46.24.12-.12a1.84 1.84 0 0 0-.1-2.51 1.92 1.92 0 0 0-2.56-.1z"/>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="filter-criteria bed-option">
                                <div className="Select-input-container">
                                    <select className="Select-input Select-sm Select-no-label"
                                            onChange={(event) => this.handleSelectChange('filterMinRooms', event)}
                                            value={this.state.filterMinRooms}>
                                        <option value="">Min rooms</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <span className="Select-dropdown-arrow Select-sm">
                                        <span style={spanStyle}>
                                            <svg className="Svg" fill="currentColor" style={svgStyle} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <path d="M95.87 25.42l-.12.11L50 70.46 4.26 25.55l-.12-.11a1.92 1.92 0 0 0-2.56.1A1.84 1.84 0 0 0 1.45 28l.12.12 47.07 46.32a1.94 1.94 0 0 0 2.71 0l47.1-46.24.12-.12a1.84 1.84 0 0 0-.1-2.51 1.92 1.92 0 0 0-2.56-.1z"/>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="filter-criteria bed-option">
                                <div className="Select-input-container">
                                    <select className="Select-input Select-sm Select-no-label"
                                            onChange={(event) => this.handleSelectChange('filterMaxRooms', event)}
                                            value={this.state.filterMaxRooms}>
                                        <option value="">Max rooms</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <span className="Select-dropdown-arrow Select-sm">
                                        <span style={spanStyle}>
                                            <svg className="Svg" fill="currentColor" style={svgStyle} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <path d="M95.87 25.42l-.12.11L50 70.46 4.26 25.55l-.12-.11a1.92 1.92 0 0 0-2.56.1A1.84 1.84 0 0 0 1.45 28l.12.12 47.07 46.32a1.94 1.94 0 0 0 2.71 0l47.1-46.24.12-.12a1.84 1.84 0 0 0-.1-2.51 1.92 1.92 0 0 0-2.56-.1z"/>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="filter-criteria bed-option">
                                <div className="Select-input-container">
                                    <select className="Select-input Select-sm Select-no-label"
                                            onChange={(event) => this.handleSelectChange('filterDistrict', event)}
                                            value={this.state.filterDistrict}>
                                        <option value="">District</option>
                                        {this.props.districts ? (
                                            this.props.districts.map((item, index) => {
                                                return <option value={item}>{item}</option>
                                            })
                                        ):(null)}
                                    </select>
                                    <span className="Select-dropdown-arrow Select-sm">
                                        <span style={spanStyle}>
                                            <svg className="Svg" fill="currentColor" style={svgStyle} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                <path d="M95.87 25.42l-.12.11L50 70.46 4.26 25.55l-.12-.11a1.92 1.92 0 0 0-2.56.1A1.84 1.84 0 0 0 1.45 28l.12.12 47.07 46.32a1.94 1.94 0 0 0 2.71 0l47.1-46.24.12-.12a1.84 1.84 0 0 0-.1-2.51 1.92 1.92 0 0 0-2.56-.1z"/>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/*<div className="filter-criteria search-alerts show-for-medium-up">*/}
                                {/*<button className="Button Button-sm Button-primary"*/}
                                        {/*onClick={this.handleApplyFilters.bind(this)}>Apply filters</button>*/}
                            {/*</div>*/}
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}

export default Filter;