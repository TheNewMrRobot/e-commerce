import React from 'react'
import "./checkout.styles.scss";
import CheckoutItem from "../../Components/Checkout-item/CheckoutItem";
import { connect } from "react-redux";
import {  createStructuredSelector } from "reselect";
import { selectCartItems,cartTotalAmount } from "../../Redux/Cart/cartSelectors";

const Checkout = ({cartItems,total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quanity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItems={cartItem}/>)}
            <div className="total">
                 <span>TOTAL:₹ {total}</span>
            </div>
           
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: cartTotalAmount
})

export default connect(mapStateToProps)(Checkout);
