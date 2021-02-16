import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import userReducer from "./User/userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./Directory/directory.Reducer";
import shopDataReducer from "./ShopData/shopDataReducer";



const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory:directoryReducer,
    shop:shopDataReducer
})

export default persistReducer(persistConfig ,rootReducer);