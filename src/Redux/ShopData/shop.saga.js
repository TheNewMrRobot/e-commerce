// this file have all the saga codes
//listens for every action of specific type that we pass to it
import {takeEvery,call,put} from 'redux-saga/effects';
import ShopActionTypes from  "./shop.type";
import { firestore,convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess } from "./shop.actions";

export function* fetchCollectionsStartAsync() {
    console.log("Saga Started")
    try{
        //yeild is like await which can resume ,pause,play
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(err){
        console.log(err)
    }
}


export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsStartAsync)
}