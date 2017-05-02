import React, { Component } from 'react';

var Carousel = require('react-responsive-carousel').Carousel;
import './Carousel.css';

class CarouselContainer extends Component {
    onChange() {

    }

    onClickItem() {

    }

    onClickThumb() {

    }

    render() {
        let pics = this.props.images.split(',');

        if (pics) {
            return (
                <Carousel axis="horizontal" showThumbs={true} showArrows={true} onChange={this.onChange}
                          onClickItem={this.onClickItem} onClickThumb={this.onClickThumb} dynamicHeight emulateTouch>
                    {pics.map((item, index) => {
                        return (
                            <div>
                                <img src={"/img/" + item} key={"carousel-img-" + index}/>
                            </div>
                        );
                    })}
                </Carousel>
            );
        } else {
            return null;
        }
    }
}

export default CarouselContainer;