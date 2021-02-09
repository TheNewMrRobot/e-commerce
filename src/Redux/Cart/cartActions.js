import { cartTypes } from "./cartTypes"

export const toggleCartComponent = ()=> ({
    type: cartTypes.TOGGLE_CART_COMPONENT
})

export const addItem = item => ({
    type:cartTypes.ADD_ITEM,
    payload:item
})