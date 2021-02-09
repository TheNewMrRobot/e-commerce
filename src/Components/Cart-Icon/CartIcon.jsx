import React from 'react';
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg";
import {connect} from "react-redux"
import { toggleCartComponent } from '../../Redux/Cart/cartActions';
import { cartItemsCount } from '../../Redux/Cart/cartSelectors';

const CartIcon = ({toggleCartComponent,itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartComponent}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartComponent : ()=> dispatch(toggleCartComponent())
})

const mapStateToProps = (state)=>({
   itemCount: cartItemsCount(state)
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
