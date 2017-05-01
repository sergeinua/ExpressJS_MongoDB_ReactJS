import React, { Component } from 'react';

class Itemlist extends Component {
    constructor(props) {
        super(props);
        this.state = {items: null};
    }

    componentDidMount() {
        fetch('/', {
            method: 'POST'
        }).then((resp) => {
            return resp.json();
        }).then((items) => {
            this.setState({items: items})
        });
    }

    render() {
        console.log('items', this.state.items);
        const divStyle = {
            backgroundImage: 'url(/img/)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: 100 + '%',
            height: 100 + '%'
        };

        return (
            <div className="HybridView" id="hybrid-view">
                <div className="ListingWrapper">
                    <div className="ListingWide">
                        <div className="PhotoGallery">
                            <div className="gallery">
                                <i className="fav-icon icon-star-outline"></i>
                                <div className="gallery-darken-overlay"></div>
                                <div className="HpImage">
                                    <div aria-label="3401 Clay Street Photo 1"
                                         title="3401 Clay Street Photo 1"
                                         style={divStyle}></div>
                                </div>
                            </div>
                            <div className="image-cache"></div>
                        </div>
                        <div className="ListingContent">
                            <div className="Container Container-md">
                                <div className="listing-info">
                                    <div className="content-left">
                                        <a className="Linker Linker-default"
                                           href="/3401-clay-street-san-francisco-ca-94118-ttxgaz/pad">
                                            <h4 className="name">3401 Clay Street</h4>
                                            <p className="city">
                                                <span>San Francisco,</span>
                                                <span> CA</span><span> 94118</span>
                                            </p>
                                        </a>
                                        <p className="keyword Utils-text-overflow">Apartments For Rent</p>
                                        <img className="verified-icon"
                                             src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwdjE2aDhWMEgweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGQ9Ik03Ljc5Ni4wM0w3Ljc3LjAzNiA3Ljc1NC4wNEM3LjQxLjE1OCA1LjA3Ljk1NyAyLjgyIDEuMzhjLS44MDguMTUtMS42MDYuMjU1LTIuMzE2LjI1Ni0uMTg2IDAtLjI5Ny4wNDYtLjM3My4xMDUtLjA3My4wNjItLjEyOC4xNTItLjEzLjMwMnY1LjI3M2MwIC4wNzIuMDIgMS4yMzMuOTU4IDIuODQ2Ljk0MiAxLjYxNCAyLjc5OCAzLjY4NSA2LjUxNiA1LjU5N2wuMDczLjAzNy4wMzMuMDRoLjAwM2MuMDE2LjAxLjA0Ny4wMjcuMDg0LjA0NC4wNzUuMDM1LjE3NS4wNzMuMjU3LjEuMDI4LjAxLjA1NC4wMTYuMDc1LjAyMlYwYy0uMDE3LjAwMy0uMDUuMDEtLjA5Ni4wMTVINy45Yy0uMDYyLjAxLS4wOTYuMDEzLS4xMDQuMDE0IiBmaWxsPSIjMTc5Qzg4IiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjxwYXRoIGQ9Ik04LjAxMi4wMDJMOCAwdjE2bC4wNzQtLjAyMmMuMDg0LS4wMjcuMTktLjA2Ny4yNjQtLjEwMi4wMzYtLjAxNy4wNjctLjAzNC4wOC0uMDQybC4wMzQtLjA0LjA3My0uMDM2YzMuNzItMS45MSA1LjU3Ny0zLjk4MyA2LjUxNy01LjU5Ni45NC0xLjYxMy45NTgtMi43NzQuOTU4LTIuODQ2VjIuMDQyYzAtLjEtLjAyNy0uMTctLjA2NS0uMjI2LS4wMzgtLjA1NC0uMDg4LS4wOTQtLjE1OC0uMTI2bC0uMDE3LS4wMDZjLS4wNzUtLjAzLS4xNTgtLjA0OC0uMjY1LS4wNDgtLjcxIDAtMS41MDctLjEwNS0yLjMxOC0uMjU2LS44MS0uMTUyLTEuNjMtLjM1My0yLjM2NS0uNTUzQzkuNS40NyA4LjQ2LjExNSA4LjI0Mi4wNEw4LjIzLjAzOGwtLjAyNy0uMDFoLS4wMWMtLjAxNy0uMDAzLS4wNS0uMDA1LS4wOTYtLjAxMmgtLjAwMy0uMDAyTDguMDEyIDAiIGZpbGw9IiMzNUNEQjgiLz48cGF0aCBkPSJNMTEuOSAzLjk5Yy0uMzUyLS4yMi0uODE0LS4xMTUtMS4wMzUuMjM1bC0zLjMyMiA1LjI4TDUuOTc1IDguMjJjLS4zMi0uMjYyLS43OTMtLjIxNS0xLjA1NS4xMDUtLjI2My4zMi0uMjE2Ljc5My4xMDQgMS4wNTZsMi4yMjUgMS44MjVjLjE2NS4xMzYuMzgzLjE5NC41OTQuMTYuMjEyLS4wMzQuNC0uMTYuNTE1LS4zNGwzLjc3NC02Yy4yMi0uMzUuMTE2LS44MTQtLjIzNS0xLjAzNSIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4="/>
                                    </div>
                                    <div className="content-right">
                                        <div className="min-price"><span>$4,200</span></div>
                                        <div className="beds">1 bed</div>
                                        <span className="tag"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Itemlist;