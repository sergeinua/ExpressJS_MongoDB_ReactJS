import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <section className="FilterNav">
                <div className="Row">
                    <nav className="filter-nav show-for-medium-up">
                        <div className="search-input-wrapper">
                            <div className="AutocompleteSearchInput">
                                <span className="AutocompleteSearchInput-geolocate-btn">
                                    <i className="Geolocation icon-location geolocate-autocomplete-search"></i>
                                </span>
                                <input type="text" className="AutocompleteSearchInput-search-input" placeholder="Find apartments in..." value="San Francisco, CA" />
                                <button className="AutocompleteSearchInput-search-submit">
                                    <span className="AutocompleteSearchInput-icon-search-btn">
                                        <i className="icon-search"></i>
                                    </span>
                                </button>
                                <div className="AutocompleteSearchInput-suggestions Utils-hidden">
                                    <ul className="AutocompleteSearchInput-list">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="filter-options">
                            <div className="filter-criteria" name="price-filter">
                                <div className="ButtonDropdown">
                                    <div className="ButtonDropdown-clickable">
                                        <label className="Label">Any price</label>
                                        <i className="ButtonDropdown-dropdown-arrow Utils-arrow-down icon-arrow"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-criteria bed-option" name="bed-filter">
                                <div className="ButtonDropdown">
                                    <div className="ButtonDropdown-clickable">
                                        <label className="Label">All beds, All baths</label>
                                        <i className="ButtonDropdown-dropdown-arrow Utils-arrow-down icon-arrow"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-criteria items-option show-for-large-up" name="propertyType-filter">
                                <div className="ButtonDropdown">
                                    <div className="ButtonDropdown-clickable">
                                        <label className="Label">Property types</label>
                                        <i className="ButtonDropdown-dropdown-arrow Utils-arrow-down icon-arrow"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-criteria items-option" name="advanced-filter">
                                <div className="ButtonDropdown">
                                    <div className="ButtonDropdown-clickable">
                                        <label className="Label">More</label>
                                        <i className="ButtonDropdown-dropdown-arrow Utils-arrow-down icon-arrow"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-criteria search-alerts show-for-medium-up" name="search-alerts">
                                <button className="Button Button-sm Button-primary">Get alerts</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}

export default Filter;