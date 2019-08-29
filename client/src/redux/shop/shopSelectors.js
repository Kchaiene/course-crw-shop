import {createSelector} from 'reselect';



const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => {
        return shop.collections}
);

export const selectCollectionsAsArray = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map( key => collections[key] ) : null
);

export const selectCollectionId = collectionUrl => (
    createSelector(
        [selectShopCollections],
        collections => collections ? collections[collectionUrl] : null
    )
);

export const selectAreCollectionsExists = createSelector(
    [selectShopCollections],
    collections => !!collections
);
