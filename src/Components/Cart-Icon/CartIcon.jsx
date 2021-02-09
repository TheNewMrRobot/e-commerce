import React from 'react';
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg";
import {connect} from "react-redux"
import { toggleCartComponent } from '../../Redux/Cart/cartActions';

const CartIcon = ({toggleCartComponent}) => {
    return (
        <div className="cart-icon" onClick={toggleCartComponent}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartComponent : ()=> dispatch(toggleCartComponent())
})


export default connect(null,mapDispatchToProps)(CartIcon);
