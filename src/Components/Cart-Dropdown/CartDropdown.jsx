import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../Custom-Button/Custom-Button";
import { connect } from "react-redux";
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/cartSelectors';

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem}/>
                )}
            </div>
            <CustomButton>Go To CHECKOUT</CustomButton>
            
        </div>
    )
}

const mapStateToProps = (state)=> ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
