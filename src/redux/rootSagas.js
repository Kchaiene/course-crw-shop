import {call, all} from 'redux-saga/effects';
import shopSagas from "./shop/shopSagas";
import userSagas from "./user/userSagas";
import cartSsgas from "./cart/cartSagas";



export default function* rootSagas (){
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSsgas),
    ])
};

