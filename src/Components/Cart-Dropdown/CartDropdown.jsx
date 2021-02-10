import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../Custom-Button/Custom-Button";
import { connect } from "react-redux";
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/cartSelectors';
import { createStructuredSelector } from "reselect";
import { withRouter  } from "react-router-dom";
import {toggleCartComponent } from "../../Redux/Cart/cartActions";

const CartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { 
                cartItems.length ?
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem}/>
                )
                :
                <span className="empty-message">Your cart is empty</span>
            }
            </div>
            <CustomButton onClick={()=> {
                history.push('/checkout');
                dispatch(toggleCartComponent());
                }}>Go To CHECKOUT</CustomButton>
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
