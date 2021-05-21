import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
    SHOP_DATA:null,
    isFetching:false,
    errorMessage:undefined

}

const shopDataReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
      case ShopActionTypes.UPDATE_COLLECTIONS:
        return {
          ...state,
           SHOP_DATA:action.payload
        }
    case ShopActionTypes.FETCH_COLLECTIONS_START:
        console.log("From Reducer Start")
        return {
            ...state,
            isFetching:true,
        }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        console.log("From Reducer Success")

        return {
            ...state,
            isFetching:false,
            SHOP_DATA:action.payload
        }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
        return {
            ...state,
            isFetching:false,
            errorMessage:action.payload

        }
        default:
            return{
                ...state
            }
    }
}

export default shopDataReducer;