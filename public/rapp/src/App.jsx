import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
import ItemList from './components/Item-list';
import Menu from './components/Menu';
import Filter from './components/Filter';
import ItemDetails from './components/Item-details';
import FilterList from './components/Filter-list';

class App extends Component {

    render() {
        const center = {lat: 50.424, lng: 30.569};

        return (
          <div>
            {/*<Map center={center}/>*/}

              <div className="AppTemplate">
                  {/*<div className="LoadingBar">*/}
                      {/*<div className="LoadingBar-progress" style="width:0%;opacity:0;"></div>*/}
                  {/*</div>*/}
                  <div className="SplitMapTemplate mobile-header-padding map-view">
                      {/*<!-- ==========================MENU-start-->*/}
                      <Menu/>
                      {/*<!-- ================================MENU-end-->*/}
                      <Filter/>
                      <div className="map-wrapper right-sidebar-active">
                          {/*<!--map_start-->*/}
                          {/*<input id="pac-input" className="controls" type="text" placeholder="Enter a location"/>*/}
                          {/*<div id="map"></div>*/}
                          {/*<div id="infowindow-content">*/}
                              {/*<span id="place-name" className="title"></span><br/>*/}
                              {/*Place ID <span id="place-id"></span><br/>*/}
                              {/*<span id="place-address"></span>*/}
                          {/*</div>*/}
                          <Map center={center}/>
                          {/*<!--map_end-->*/}
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
                                                <a className="Linker Linker-secondary" href="#">
                                                    <span className="link-style">CA</span>
                                                </a>
                                                </span>
                                                      <meta content="1"/>
                                                  </li>
                                                  <li className="HpBreadcrumb-item">
                                                <span className="TinyText">
                                                <a className="Linker Linker-secondary" href="homes-for-sale.html">
                                                    <span className="link-style">San Francisco Homes</span>
                                                </a>
                                                </span>
                                                      <meta content="2" />
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/*<!--=============================filter_start-->*/}
                                      <FilterList/>
                                      {/*<!--=========================================filter_end-->*/}
                                      <span className="SecondaryNav-map-list-toggle">List</span>
                                  </div>
                              </div>

                              {/*<!--conditional rendering here start-->*/}
                              {/*<!--list-->*/}
                              <ItemList/>
                              {/*<!--conditional rendering here end-->*/}
                              {/*<!--conditional rendering here start-->*/}

                              {/*<!--conditional rendering here end-->*/}
                          </div>
                      </div>
                  </div>
              </div>



          </div>
        );
    }
}

export default App;
