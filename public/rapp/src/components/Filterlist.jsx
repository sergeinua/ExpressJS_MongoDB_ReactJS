import React, { Component } from 'react';

class Filterlist extends Component {
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
            <div className="SecondaryNav-sort-wrapper">
                <div className="SortNav">
                    <div className="Select">
                        <div className="Select-input-container">
                            <select className="Select-input Select-sm Select-no-label">
                                <option value="">Recommended</option>
                                <option value="activated">Newest</option>
                                <option value="weekViews">Most Viewed</option>
                                <option value="photoCount">Photo Count</option>
                                <option value="highPrice">High Price</option>
                                <option value="lowPrice">Low Price</option>
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
                </div>
            </div>
        );
    }
}

export default Filterlist;