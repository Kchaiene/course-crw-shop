import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import rootReducer from "./rootReducer";
import {persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const initialState = {};

const middlewares = [thunk];

let coposeAll;

if (process.env.NODE_ENV === 'development') {
    coposeAll = composeWithDevTools(applyMiddleware(...middlewares));
} else coposeAll = applyMiddleware(...middlewares);

export const store = createStore(
    rootReducer,
    initialState,
    coposeAll,

);

export const persistor = persistStore(store);

export default {store, persistor};