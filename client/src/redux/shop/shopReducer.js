import ShopActionTypes from "./shopTypesAction";


const initialState = {
    collections: null,
    isFetching: false,
    error: null
};

const shopReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                collections: payload,
                isFetching: false
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: payload
            };

        default:
            return state;
    }
};

export default shopReducer;