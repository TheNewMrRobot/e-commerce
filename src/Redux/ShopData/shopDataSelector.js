import { createSelector } from "reselect";

const shopData = state => state.shop;


const selectShopData = createSelector(
    [shopData],
    shop => shop.SHOP_DATA
)

export const selectCollectionForPreview = createSelector(
    [selectShopData],
    collections =>collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectRoutePath = collectionParamUrl => createSelector(
    [selectShopData],
    collections => (collections ? collections[collectionParamUrl] : null)
)

export default selectShopData;