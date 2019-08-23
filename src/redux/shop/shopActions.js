import ShopActionTypes from "./shopTypesAction";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";




export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollections = () => async (dispatch) => {
    const collectionsRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    try{
        const collectionsSnapshot = await collectionsRef.get();

        const collectionsMap = convertCollectionsSnapshotToMap(collectionsSnapshot);
        dispatch({
            type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
            payload: collectionsMap
        });

    } catch (e) {
        console.log('ERROR => fetchCollections', e);
        dispatch({
            type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
            payload: e
        });
    }
};

// export const fetchCollections = () => {console.log('fetchCollections'); return (dispatch) => {
//     console.log('fetchCollections = 2', dispatch);
//
//     const collectionsRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());
//
//     collectionsRef.get().then( collectionsSnapshot => {
//         let collectionsMap = convertCollectionsSnapshotToMap(collectionsSnapshot);
//         dispatch({
//             type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
//             payload: collectionsMap
//         });
//     }).catch ( e => {
//         console.log('ERROR => fetchCollections', e);
//         dispatch({
//             type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
//             payload: e
//         });
//     });
// };
// }