import {createSelector} from 'reselect';



const selectCollections = state => state.collections;

export const selectCollectionsData = createSelector(
    [selectCollections],
    collections => collections.collections
)

export const selectCollectionPreview = createSelector(
    [selectCollectionsData],
    collections => Object.keys(collections).map(key => collections[key])
    )

export const selectCollection = collectionUrl => 
    createSelector(
        [selectCollectionsData],
        collections => collections[collectionUrl]
    )