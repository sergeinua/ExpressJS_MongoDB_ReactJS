import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {menuVisible: false};
    }
    handleHamburgerMenuClick() {
        this.setState({menuVisible: !this.state.menuVisible});
    }

    render() {
        return (
            <div className="HeaderNav">
                <div className="HamburgerNav">
                    {this.state.menuVisible ? (
                        <div className="HamburgerNav-cover"
                             onClick={this.handleHamburgerMenuClick.bind(this)}
                             style={{cursor: 'default'}}></div>
                    ) : (
                        null
                    )}
                    <aside className={"HamburgerNav-left " + (this.state.menuVisible ? "HamburgerNav-left-visible" : "")}>
                        <div className="HamburgerNav-menu">
                            <div className="HamburgerNav-logo-wrapper">
                                <a className="Linker Linker-default" href="index.html">
                                    <img className="HamburgerNav-logo" src="img/hotpadsLogoHorizontal.svg" />
                                </a>
                            </div>
                            <ul className="HamburgerNav-list">
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="apartments-for-rent/map.html">
                                        <i className="HamburgerNav-icon icon-search-for-rent"></i>
                                        <span className="HamburgerNav-link-text">Search for rent</span>
                                    </a>
                                </li>
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="map.html">
                                        <i className="HamburgerNav-icon icon-search-for-sale"></i>
                                        <span className="HamburgerNav-link-text">Search for sale</span>
                                    </a>
                                </li>
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="loginDashboard.html">
                                        <i className="HamburgerNav-icon icon-star-outline"></i>
                                        <span className="HamburgerNav-link-text">Dashboard</span>
                                    </a>
                                </li>
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="loginSearch.html">
                                        <i className="HamburgerNav-icon icon-alert"></i>
                                        <span className="HamburgerNav-link-text">Search alerts</span>
                                    </a>
                                </li>
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="loginAddPost.html">
                                        <i className="HamburgerNav-icon icon-post-a-listing"></i>
                                        <span className="HamburgerNav-link-text">Post to HotPads</span>
                                    </a>
                                </li>
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="mailto:support@realtor.loc">
                                        <i className="HamburgerNav-icon icon-sublet"></i>
                                        <span className="HamburgerNav-link-text">Send feedback</span>
                                    </a>
                                </li>
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default">
                                        <i className="HamburgerNav-icon icon-profile"></i>
                                        <span className="HamburgerNav-link-text">Sign in / register</span>
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <ul className="HamburgerNav-list">
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="apartments-for-rent.html">
                                            <span className="HamburgerNav-link-text">Apartments for Rent</span>
                                        </a>
                                    </li>
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="houses-for-rent.html">
                                            <span className="HamburgerNav-link-text">Houses for Rent</span>
                                        </a>
                                    </li>
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="condos-for-rent.html">
                                            <span className="HamburgerNav-link-text">Condos for Rent</span>
                                        </a>
                                    </li>
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="townhomes-for-rent.html">
                                            <span className="HamburgerNav-link-text">Townhomes for Rent</span>
                                        </a>
                                    </li>
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="duplexes-for-rent.html">
                                            <span className="HamburgerNav-link-text">Duplexes for Rent</span>
                                        </a>
                                    </li>
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="corporate-housing.html">
                                            <span className="HamburgerNav-link-text">Corporate Housing for Rent</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="HamburgerNav-list">
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="homes-for-sale.html">
                                            <span className="HamburgerNav-link-text">Homes for Sale</span>
                                        </a>
                                    </li>
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="land-for-sale.html">
                                            <span className="HamburgerNav-link-text">Lots and Land for Sale</span>
                                        </a>
                                    </li>
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="condos-for-sale.html">
                                            <span className="HamburgerNav-link-text">Condos for Sale</span>
                                        </a>
                                    </li>
                                    <li className="HamburgerNav-list-item">
                                        <a className="Linker Linker-default" href="townhomes-for-sale.html">
                                            <span className="HamburgerNav-link-text">Townhomes for Sale</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="HamburgerNav-section">Resources</div>
                            <ul className="HamburgerNav-list">
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="blog.html">
                                        <span className="HamburgerNav-link-text">Blog</span>
                                    </a>
                                </li>
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="pages/rentersGuide/home.html">
                                        <span className="HamburgerNav-link-text">Renter&#x27;s guide</span>
                                    </a>
                                </li>
                                <li className="HamburgerNav-list-item">
                                    <a className="Linker Linker-default" href="pages/buyersGuide/index.html">
                                        <span className="HamburgerNav-link-text">Buyer&#x27;s guide</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div className="HeaderNav-wrapper">
                    <div className="HeaderNavMobile">
                        <div className="HeaderNavMobile-nav-left">
                            <div className="HeaderNavMobile-on-click">
                                <img className="HeaderNavMobile-ham-nav" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC42NiAxNi4wNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlMzVhMjg7fS5jbHMtMntmaWxsOiNkMzQ4MjI7fS5jbHMtM3tmaWxsOiNmMzc3NTI7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiNlY2MxMzI7fS5jbHMtNntmaWxsOiNkMWEwMjU7fS5jbHMtN3tmaWxsOiNmOWQzNjQ7fS5jbHMtOHtmaWxsOiM0MmIwYTg7fS5jbHMtOXtmaWxsOiM1ZmM0YmI7fS5jbHMtMTB7ZmlsbDojMmE5ZDk1O30uY2xzLTExe2ZpbGw6I2Q4ZDhkODt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDI8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQuODYsMi4xMiwxOS42MywwbDQuNzcsMi4xMi0xLjU4LDkuMjEtMy4xOSwxLjgxLTMuMTktMS44MSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE0Ljg2LDIuMTJsNC43NywyLjI1djguNzZsLTMuMTktMS44MSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTE5LjYzLDQuMzdsNC43Ny0yLjI1LTEuNTgsOS4yMS0zLjE5LDEuODEiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yMi41NSw4LjI1bC0uMjgsMi4xNUwyMS4xMywxMWwuMDctMS44OU0xNy41OSw0LjM5bC4xOCwyLjA5TDE5LDcuMDYsMTksNC45NCIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTIyLDcuNCwyNC4yMSw1bDQsMS4zOS41LDItMi4zMSw1Ljg5LTIuMSwxLjU2LTIuNzItMS43NSIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTIyLDcuNGw0LjIyLDEuNDgtMS45Miw3LTIuNzItMS43NSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTI2LjE3LDguODhsMi0yLjQ3LjUsMi0yLjMxLDUuODktMi4xLDEuNTYiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yMy4yNSwxNC45NWwuMjktMS43OS44Mi4zM0wyNCwxNS40MW0zLTUtLjQ1LDEuNDUtLjcyLjM2LjM2LTEuMzgiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik0xMi40OCw1Ljg2bC0uOTQsMS4zOC0uNzUtLjEzTDEwLDcuNTIsMTEuODcsMTNsMi4zNSwyLjc4LDMuNjQtMS44Ni0uMS00LjYzLTIuNDQtMiIvPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTEzLjI2LDExLjM3bDIuMDUtNC4wOCwyLjQ0LDIsLjEsNC42My0zLjY0LDEuODZNMTEuNTQsNy4yNGwtLjg0LjQ4LjQ2LDEuNzMuNTUtMS4xNCIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Ik0xMCw3LjUybC42Ni4xOS40NiwxLjczLDIuMSwxLjkyLDEsNC4zOUwxMS44NywxMyIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTE1LjMxLDE1bC0uMjItMS43NC0uNy4zMS4zMiwxLjczbTEuMzQtNCwuMTcsMS4wNywxLS40Mi0uMTEtMS4xMiIvPjxnIGlkPSJoYW0tbmF2LWZ1bGwiPjxwYXRoIGlkPSJGaWxsLTE3IiBjbGFzcz0iY2xzLTExIiBkPSJNLjg5LDEuODRIOS4yNEEuODkuODksMCwxLDAsOS4yNCwwSC44OWEuODkuODksMCwxLDAsMCwxLjc5Ii8+PHBhdGggaWQ9IkZpbGwtMTkiIGNsYXNzPSJjbHMtMTEiIGQ9Ik0uODksMTZIOS4yNGEuODkuODksMCwxLDAsMC0xLjc5SC44OUEuODkuODksMCwxLDAsLjg5LDE2Ii8+PHBhdGggaWQ9IkZpbGwtMjEiIGNsYXNzPSJjbHMtMTEiIGQ9Ik0uODksOC44OUg2LjI2YS44OS44OSwwLDEsMCwwLTEuNzlILjg5YS44OS44OSwwLDAsMCwwLDEuNzkiLz48L2c+PC9nPjwvZz48L3N2Zz4=" />
                            </div>
                        </div>
                        <div className="HeaderNavMobile-nav-center">
                            <div className="HeaderNavMobile-search-wrapper">
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
                        </div>
                        <div className="HeaderNavMobile-nav-right">
                            <div className="HeaderNavMobile-filter-btn HeaderNavMobile-on-click">
                                <i className="icon-filter"></i>
                                <span className="HeaderNavMobile-label">FILTERS</span>
                            </div>
                        </div>
                    </div>
                    <div className="HeaderNavMdAndUp show-for-medium-up">
                        <header>
                            <nav className="HeaderNavMdAndUp-header-nav">
                                <a className="HeaderNavMdAndUp-menu-icon" onClick={this.handleHamburgerMenuClick.bind(this)}>
                                    <span></span>
                                </a>
                                <div className="HeaderNavMdAndUp-logo-wrapper">
                                    <Link to="/" className="Linker Linker-default" >
                                        {/*<a className="Linker Linker-default" href="index.html">*/}
                                            <img className="HeaderNavMdAndUp-logo" src="img/hotpadsLogoHorizontal.svg" />
                                        {/*</a>*/}
                                    </Link>
                                </div>
                                {/*<div className="HeaderNavMenuItem">*/}
                                    {/*<a className="Linker Linker HeaderNavMenuItem-item Linker-default" href="#">For rent</a>*/}
                                    {/*<div className="rent-drop-down HeaderDropdown">*/}
                                        {/*<span className="HeaderDropdown-up-arrow"></span>*/}
                                        {/*<ul className="HeaderDropdown-items">*/}
                                            {/*<div className="HeaderNav-LocationHeader">San Francisco</div>*/}
                                            {/*<a className="Linker Linker-default" href="apartments-for-rent.html">*/}
                                                {/*<li>Apartments for Rent</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="houses-for-rent.html">*/}
                                                {/*<li>Houses for Rent</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="condos-for-rent.html">*/}
                                                {/*<li>Condos for Rent</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="townhomes-for-rent.html">*/}
                                                {/*<li>Townhomes for Rent</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="duplexes-for-rent.html">*/}
                                                {/*<li>Duplexes for Rent</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="corporate-housing.html">*/}
                                                {/*<li>Corporate Housing for Rent</li>*/}
                                            {/*</a>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="HeaderNavMenuItem">*/}
                                    {/*<a className="Linker Linker HeaderNavMenuItem-item active Linker-default" href="#">For sale</a>*/}
                                    {/*<div className="sale-drop-down HeaderDropdown">*/}
                                        {/*<span className="HeaderDropdown-up-arrow"></span>*/}
                                        {/*<ul className="HeaderDropdown-items">*/}
                                            {/*<div className="HeaderNav-LocationHeader">San Francisco</div>*/}
                                            {/*<a className="Linker Linker-default" href="homes-for-sale.html">*/}
                                                {/*<li>Homes for Sale</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="land-for-sale.html">*/}
                                                {/*<li>Lots and Land for Sale</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="condos-for-sale.html">*/}
                                                {/*<li>Condos for Sale</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="townhomes-for-sale.html">*/}
                                                {/*<li>Townhomes for Sale</li>*/}
                                            {/*</a>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="HeaderNavMenuItem">*/}
                                    {/*<a className="Linker Linker HeaderNavMenuItem-item Linker-default" href="#">Explore</a>*/}
                                    {/*<div className="explore-drop-down HeaderDropdown">*/}
                                        {/*<span className="HeaderDropdown-up-arrow"></span>*/}
                                        {/*<ul className="HeaderDropdown-items">*/}
                                            {/*<a className="Linker Linker-default" href="#">*/}
                                                {/*<li>Homes for Sale in San Jose</li>*/}
                                            {/*</a>*/}
                                            {/*<a className="Linker Linker-default" href="#">*/}
                                                {/*<li>Homes for Sale in Sacramento</li>*/}
                                            {/*</a>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="HeaderNavMdAndUp-lg-and-up">*/}
                                    {/*<div className="HeaderNavMenuItem">*/}
                                        {/*<a className="Linker Linker HeaderNavMenuItem-item Linker-default" href="loginDashboard.html">Dashboard</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="HeaderNavMdAndUp-lg-and-up">*/}
                                    {/*<div className="HeaderNavMenuItem">*/}
                                        {/*<a className="Linker Linker HeaderNavMenuItem-item Linker-default" href="loginAddPost.html">Post to HotPads</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </nav>
                        </header>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;