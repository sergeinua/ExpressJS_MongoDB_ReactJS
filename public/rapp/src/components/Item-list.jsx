import React, { Component } from 'react';

import ItemListSingle from './Item-list-single';

class ItemList extends Component {
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
        let items = this.state.items;

        if (items) {
            return (
                <div className="HybridView" id="hybrid-view">
                    {items.map((item, index) => {
                        return <ItemListSingle
                            data={item}
                            key={"item-list-single-" + index}
                        />
                    })}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ItemList;