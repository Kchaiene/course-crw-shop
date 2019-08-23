import cartActionTypes from './cartTypesAction';
import {clearRemovedItemFromCart, groupAddedItemToCart} from "./utilityCart";




const initialState = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: groupAddedItemToCart(state.cartItems, action.payload)
            };
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearRemovedItemFromCart(state.cartItems, action.payload)
            };
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( item => item.id !== action.payload.id)
            };

        default: return state;
    }
};

export default cartReducer;