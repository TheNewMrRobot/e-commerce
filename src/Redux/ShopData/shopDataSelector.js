import { createSelector } from "reselect";


const COLLECTION_ID_MAP ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const shopData = state => state.shop;


const selectShopData = createSelector(
    [shopData],
    shop => shop.SHOP_DATA
)


export const selectCollectionForPreview = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectRoutePath = collectionParamUrl => createSelector(
    [selectShopData],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionParamUrl] )
)

export default selectShopData;