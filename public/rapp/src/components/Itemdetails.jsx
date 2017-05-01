import React, { Component } from 'react';

class Itemdetails extends Component {
    render() {
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
                            <button className="Button Button-sm Button-default">Close</button>
                        </div>
                    </div>
                </div>
                <div className="Hdp">
                    <div className="HdpPhotoGallery">
                        <div className="Carousel">
                            <div className="Carousel-container">
                                <div className="Carousel-track bxslider"
                                     style="transform: translate3d(0px, 0px, 0px); width: 12390px;">
                                    <div className="Carousel-item-wrapper" style="width: 590px;">
                                        <img src="https://photonet.hotpads.com/search/listingPhoto/HotPads/1623630/0001_506686441_large.jpg"
                                             className="Carousel-item"/>
                                    </div>
                                    <div className="Carousel-item-wrapper" style="width: 590px;">
                                        <img src="https://photonet.hotpads.com/search/listingPhoto/HotPads/1623630/0002_87767953_large.jpg"
                                             className="Carousel-item"/>
                                    </div>
                                    <div className="Carousel-item-wrapper" style="width: 590px;">
                                        <img src="https://photonet.hotpads.com/search/listingPhoto/HotPads/1623630/0003_913580237_large.jpg"
                                             className="Carousel-item"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="MultiModelHdpHeader">
                        <div className="Container Container-md">
                            <div className="Row">
                                <div className="MultiModelHdpHeader-block" style="width: 33.3333%;display: inline-block">
                                    <div className="FloorplanPricePreview"><span
                                        className="Text Utils-accent-dark Text-tiny">Price</span>
                                        <div><h3 className="Text Text-sm">$2,995</h3></div>
                                    </div>
                                </div>
                                <div className="MultiModelHdpHeader-block" style="width: 33.3333%;display: inline-block">
                                    <div className="FloorplanPricePreview"><span
                                        className="Text Utils-accent-dark Text-tiny">District</span>
                                        <div><h3 className="Text Text-sm">Pechersky</h3></div>
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
                                            <div className="Utils-text-overflow">1660 Bay Street</div>
                                            <div className="Utils-text-overflow Utils-accent-dark">
                                                        <span>
                                                            <span itemprop="addressLocality">San Francisco</span>
                                                            <span itemprop="addressRegion"> CA</span>
                                                            <span itemprop="postalCode"> 94123</span>
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
                                <button className="Button Button-md Button-primary Button-full">Be the FIRST to
                                    contact!
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="HdpDescription">
                        <div className="HdpContentWrapper">
                            <div className="Container Container-md">
                                <div className="HdpContentWrapper-header">
                                    <div className="HdpContentWrapper-left">
                                        <div className="HdpContentWrapper-title">
                                            <span className="Text Text-lg Text Utils-bold Utils-accent-dark Text-sm">Description</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="HdpContentWrapper-content">
                                <div className="Container Container-md">
                                    <div id="HdpDescriptionContent">Brimming with vibrant details,
                                        this beautiful Marina retreat draws inspiration from
                                        colonial Mexico. From the Spanish tile roof to lobby
                                        Mariachi murals, there is more than a little south of the
                                        border charm to go around. These apartments boast above
                                        average dimensions we re talking living room concert huge.
                                        Invite your whole crew for taco night.
                                    </div>
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
                                            <span className="Text Text-lg Text Utils-bold Utils-accent-dark Text-sm">Contact info</span>
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
                                                            <div className="ContactListedBy-listedby-phone"><a
                                                                className="ContactListedBy-listedby-phone-link"
                                                                href="tel://1-415-484-1481">1-415-484-1481</a>
                                                            </div>
                                                        </div>
                                                        <div className="ContactListedBy-display-name-container">
                                                            <div>
                                                                <div className="Utils-bold">Listed By:</div>
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

export default Itemdetails;