import {createSelector} from 'reselect';

const selectCollections = state => state.collections;

export const selectCollectionsData = createSelector(
    [selectCollections],
    collections => collections.collections
)