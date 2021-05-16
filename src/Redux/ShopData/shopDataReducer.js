import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
    SHOP_DATA:null
}

const shopDataReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
      case ShopActionTypes.UPDATE_COLLECTIONS:
        return {
          ...state,
           SHOP_DATA:action.payload
        }
        default:
            return{
                ...state
            }
    }
}

export default shopDataReducer;