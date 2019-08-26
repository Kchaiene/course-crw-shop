import {all, call, put, takeLatest} from 'redux-saga/effects';
import cartActionTypes from "./cartTypesAction";
import UserActionTypes from "../user/userTypesAction";
import {clearCart} from "./cartActions";






export function* clearCartSaga (){
    yield put(clearCart());
}


export function* onSignOut () {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSaga);
}




export default function* cartSsgas () {
    yield all([ call(onSignOut) ]);
}