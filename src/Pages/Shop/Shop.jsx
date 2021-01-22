import React, { Component } from 'react';
import SHOP_DATA from "./ShopData";
import PreviewCollections from "../../Components/PreviewCollections/PreviewCollections";

class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            shopData : SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                {this.state.shopData.map(collection => (<PreviewCollections key={collection.id}{...collection}/>))}
            </div>
        )
    }
}

export default Shop;
