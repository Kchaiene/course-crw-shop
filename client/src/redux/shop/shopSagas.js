import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import ShopActionTypes from "./shopTypesAction";
import {fetchCollectionsFailure, fetchCollectionsStart, fetchCollectionsSuccess} from "./shopActions";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";


export function* fetchCollectionsAsyncSagas() {
    try{
        const collectionsRef = firestore.collection('collections');
        const collectionsSnapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, collectionsSnapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));

    } catch (e) {
        console.log('ERROR => fetchCollections', e);
        yield put(fetchCollectionsFailure(e));
    }
}

export function* onfetchCollectionsStartSagas() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsyncSagas )
}





export default function* shopSagas() {
    yield all([ call(onfetchCollectionsStartSagas), ])
}



