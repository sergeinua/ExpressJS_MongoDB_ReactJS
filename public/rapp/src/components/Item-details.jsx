import React, { Component } from 'react';

import CarouselContainer from './Carousel-container';

class ItemDetails extends Component {

    render() {
        let address = this.props.data.address.split(',');

        return (
            <div className="ListingPage" id="ListingPage">
                <div className="secondary-nav-wrapper">
                    <div className="SecondaryNav">
                        <div className="SecondaryNav-breadcrumbs-wrapper Utils-text-overflow">
                            <div className="AreaBreadcrumbs">
                                {/*<!-- ================================================country + city here-->*/}
                            </div>
                        </div>
                        <div className="SecondaryNav-close-btn">
                            <button className="Button Button-sm Button-default" onClick={() => this.props.handleCloseBtn()}>Закрыть</button>
                        </div>
                    </div>
                </div>
                <div className="Hdp">
                    <div className="HdpPhotoGallery">
                        {this.props.data ? (
                            <CarouselContainer images={this.props.data.pics}/>
                        ) : (null)}
                    </div>
                    <div className="MultiModelHdpHeader">
                        <div className="Container Container-md">
                            <div className="Row">
                                <div className="MultiModelHdpHeader-block" style={{width: 33.3333 + '%', display: 'inline-block'}}>
                                    <div className="FloorplanPricePreview">
                                        <span className="Text Utils-accent-dark Text-tiny">Стоимость</span>
                                        <div>
                                            <h3 className="Text Text-sm">{this.props.data.price} грн.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="MultiModelHdpHeader-block" style={{width: 33.3333 + '%', display: 'inline-block'}}>
                                    <div className="FloorplanPricePreview">
                                        <span className="Text Utils-accent-dark Text-tiny">Район</span>
                                        <div>
                                            <h3 className="Text Text-sm">{this.props.data.district.replace('район', '')}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="HdpAddress">
                        <div className="HdpAddress-address-details" id="HdpAddress-address-details">
                            <div className="Container Container-md">
                                <div className="Row">
                                    <div className="HdpAddress-address-wrapper">
                                        <h1 className="Text HdpAddress-title Text-sm">
                                            <div className="Utils-text-overflow">{address[0]}</div>
                                            <div className="Utils-text-overflow Utils-accent-dark">
                                                <span>
                                                    {/*<span itemprop="addressLocality"></span>*/}
                                                    <span itemprop="addressRegion">{address[1]}</span>
                                                    <span itemprop="postalCode">{address[2]}</span>
                                                </span>
                                            </div>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ContactButton">
                        <div className="Container Container-md">
                            <div className="Row">
                                <button className="Button Button-md Button-primary Button-full">Contact!</button>
                            </div>
                        </div>
                    </div>
                    <div className="HdpDescription">
                        <div className="HdpContentWrapper">
                            <div className="Container Container-md">
                                <div className="HdpContentWrapper-header">
                                    <div className="HdpContentWrapper-left">
                                        <div className="HdpContentWrapper-title">
                                            <span className="Text Text-lg Text Utils-bold Utils-accent-dark Text-sm">Описание</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HdpContentWrapper-content">
                                <div className="Container Container-md">
                                    <div id="HdpDescriptionContent">{this.props.data.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="HdpDescription">
                        <div className="HdpContentWrapper">
                            <div className="Container Container-md">
                                <div className="HdpContentWrapper-header">
                                    <div className="HdpContentWrapper-left">
                                        <div className="HdpContentWrapper-title">
                                            <span className="Text Text-lg Text Utils-bold Utils-accent-dark Text-sm">Контакт</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HdpContentWrapper-content">
                                <div className="Container Container-md">
                                    <div id="HdpFormWrapper">
                                        <div className="HdpForm" id="HdpForm">
                                            <div className="HdpForm-Contact">
                                                <div className="HdpForm-Contact-content-wrapper">
                                                    <div className="ContactListedBy">
                                                        <div className="ContactListedBy-phone-container">
                                                            <div className="ContactListedBy-listedby-phone">
                                                                <a className="ContactListedBy-listedby-phone-link"
                                                                   href="tel://1-415-484-1481">1-415-484-1481</a>
                                                            </div>
                                                        </div>
                                                        <div className="ContactListedBy-display-name-container">
                                                            <div>
                                                                <div className="Utils-bold">Агент:</div>
                                                                <div>Leasing Agent</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="HdpForm-Contact-content">
                                                        {/*<!-- =======================================================FORM HERE -->*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetails;