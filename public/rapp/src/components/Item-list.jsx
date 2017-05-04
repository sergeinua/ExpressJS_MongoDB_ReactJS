import React, { Component } from 'react';

import ItemListSingle from './Item-list-single';
import ItemDetails from './Item-details';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            singleItem: null
        };
    }

    handleItemClick(item) {
        this.setState({singleItem: item});
    }

    handleCloseBtn() {
        this.setState({singleItem: null});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({items: nextProps.items});
        let _items = this.state.items;
        if (_items) {
            _items.map((item, index) => {
                if (item._id == nextProps.singleItemId) {
                    this.setState({singleItem: _items[index]});
                }
            });
        }
    }

    render() {
        let items = this.state.items,
            singleItem = this.state.singleItem;

        if (items && !singleItem) {
            return (
                <div className="HybridView" id="hybrid-view">
                    {items.map((item, index) => {
                        return <ItemListSingle
                            data={item}
                            key={"item-list-single-" + index}
                            onClick={()=>this.handleItemClick(item)}
                        />
                    })}
                </div>
            );
        } else {
            return (
                <ItemDetails
                    handleCloseBtn={this.handleCloseBtn.bind(this)}
                    data={singleItem}
                />
            );
        }
    }
}

export default ItemList;