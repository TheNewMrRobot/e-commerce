import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../Custom-Button/Custom-Button";

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>Go To CHECKOUT</CustomButton>
            
        </div>
    )
}

export default CartDropdown
