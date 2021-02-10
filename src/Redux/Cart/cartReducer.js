import { cartTypes } from "./cartTypes";
import { addItemToCart, decreaseCartItem } from "./cartUtils";

const INITIAL_STATE = {
    hiddenCart:true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case cartTypes.TOGGLE_CART_COMPONENT:
            return{
                ...state,
                hiddenCart:!state.hiddenCart
            }
        case cartTypes.ADD_ITEM:return{
            ...state,
            cartItems: addItemToCart(state.cartItems,action.payload)
        }
        case cartTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: decreaseCartItem(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;