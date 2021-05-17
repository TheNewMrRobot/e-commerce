import ShopActionTypes from "./shop.type";
import { firestore,convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = (collectionsMap)=> ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap =>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionsStartAsync = ()=>{
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart());
        collectionRef.onSnapshot(async (snapshot) => {
          const collectionsMap = convertCollectionSnapshotToMap(snapshot);
         dispatch(fetchCollectionsSuccess(collectionsMap));
        });
    }
}