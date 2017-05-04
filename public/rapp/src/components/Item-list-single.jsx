import React, { Component } from 'react';

class ItemListSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {image: null};
    }

    componentDidMount() {
        let pics = this.props.data.pics.split(','),
            address = this.props.data.address.split(',');
        this.setState({
            image: pics[0],
            country: address[3],
            city: address[2],
            street: address[0],
            rooms: this.props.data.rooms,
            price: this.props.data.price
        });
    }

    render() {
        const divStyle = {
            backgroundImage: 'url(/img/'+ this.state.image +')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: 100 + '%',
            height: 100 + '%'
        };

        return (
            <div className="ListingWrapper" onClick={this.props.onClick}>
                <div className="ListingWide">
                    <div className="PhotoGallery">
                        <div className="gallery">
                            <i className="fav-icon icon-star-outline"></i>
                            <div className="gallery-darken-overlay"></div>
                            <div className="HpImage">
                                <div aria-label="3401 Clay Street Photo 1"
                                     title="3401 Clay Street Photo 1"
                                     style={divStyle}>
                                </div>
                            </div>
                        </div>
                        <div className="image-cache"></div>
                    </div>
                    <div className="ListingContent">
                        <div className="Container Container-md">
                            <div className="listing-info">
                                <div className="content-left">
                                    <h4 className="name">{this.state.street}</h4>
                                    <p className="city">
                                        <span>{this.state.city},</span>
                                        <span>{this.state.country}</span>
                                    </p>
                                    <p className="keyword Utils-text-overflow">Apartments For Rent</p>
                                </div>
                                <div className="content-right">
                                    <div className="min-price">
                                        <span>{this.state.price}</span>
                                    </div>
                                    <div className="beds">rooms: {this.state.rooms}</div>
                                    <span className="tag"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemListSingle;