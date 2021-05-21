import {call,put,takeLatest,all} from "redux-saga/effects";
import { userActionTypes } from "../User/userTypes";
import {clearCartItems} from './cartActions'


export function* clearCart(){
    yield put(clearCartItems())
}



export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCart)
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}