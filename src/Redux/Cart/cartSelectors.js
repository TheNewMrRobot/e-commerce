import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const cartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumlator,cartItem)=>(accumlator+cartItem.quantity),0)
)