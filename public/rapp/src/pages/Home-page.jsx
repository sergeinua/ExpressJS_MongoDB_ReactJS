import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import './Home-page.css';
import Menu from '../components/Menu';
import * as homeBackground from '../homeBackground.jpg';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            districts: [],
            selectedDistrict: null
        };
    }

    componentDidMount() {
        fetch('/district', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then(resp => resp.json())
            .then(resp => {
                this.setState({districts: resp});
            });
    }

    handleDistrictItemClick(districtName) {
        let district = districtName.replace(' ', '+'),
            url = `https://maps.googleapis.com/maps/api/geocode/json?address=${district}&key=AIzaSyB4MDQL1d2dTKJQBq-alxGtbE8mCu-CLDk&language=ru`;
        fetch(url)
            .then(resp => resp.json())
            .then((resp) => {
                this.setState({
                    selectedDistrict: {
                        mapCenter: {
                            lat: resp.results[0].geometry.location.lat,
                            lng: resp.results[0].geometry.location.lng
                        },
                        districtName: districtName
                    }
                });
            });
    }

    handleAllDistrictsClick() {
        this.setState({
            selectedDistrict: {
                mapCenter: {
                    lat: 50.424,
                    lng: 30.569
                },
                districtName: null
            }
        });
    }

    componentWillUnmount() {
        this.setState({selectedDistrict: null});
    }

    render() {
        if (this.state.selectedDistrict) {
            return <Redirect to={{pathname: '/map', state: this.state.selectedDistrict}}/>;
        }
        let image = '/img/homeBackground.jpg';
        let divStyle = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 20%',
            minHeight: 700 + 'px'
        };
        return (
            <div className="AppTemplate">
                <div className="FrontPage">
                    <Menu/>
                </div>
                <div className="HomeHero">
                    <div className="HomeHero-hero-wrapper">
                        <div className="HomeHero-hero" style={divStyle}>
                            {this.state.districts.length > 0 &&
                                <div className="Row text-center">
                                    <DropdownButton title="Выбрать район" id="bg-nested-dropdown">
                                        {this.state.districts.map((district) => {
                                            return (<MenuItem
                                                        onClick={() => this.handleDistrictItemClick(district)}>{district}</MenuItem>);
                                        })}
                                    </DropdownButton>
                                    <span>или</span>
                                    <Button onClick={() => this.handleAllDistrictsClick()}>Посмотреть все районы</Button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;