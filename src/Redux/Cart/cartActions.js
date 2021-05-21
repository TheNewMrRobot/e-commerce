import { cartTypes } from "./cartTypes"

export const toggleCartComponent = ()=> ({
    type: cartTypes.TOGGLE_CART_COMPONENT
})

export const addItem = item => ({
    type:cartTypes.ADD_ITEM,
    payload:item
})

export const clearItemFromCart = item => ({
    type:cartTypes.CLEAR_ITEM,
    payload:item
})

export const removeItemFromCart = item =>({
    type:cartTypes.REMOVE_ITEM,
    payload:item
})

export const clearCartItems =()=>({
    type:cartTypes.CLEAR_ITEM_FROM_CART
})