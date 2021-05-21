import {all,call} from "redux-saga/effects";
import  {fetchCollectionsStart} from "./ShopData/shop.saga";
import {userSagas} from "./User/userSagas";
import {cartSagas} from "./Cart/cartSagas"

export default function* rootSaga(){
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas)
    ])
}

