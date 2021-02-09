import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import userReducer from "./User/userReducer";


export default combineReducers({
    user: userReducer,
    cart: cartReducer
})