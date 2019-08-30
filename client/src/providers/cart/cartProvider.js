import React, {createContext, useEffect, useState} from 'react';
import {clearRemovedItemFromCart, groupAddedItemToCart} from "../../redux/cart/utilityCart";
import {clearItemFromCart, countCartItems, countTotalPrice} from "./utilityCart";


export const CartContext = createContext({
    hidden: true,
    cartItems: [],
    cartItemsCount: 0,
    totalPrice: 0,
    toggleHidden: ()=>{},
    addItem: ()=>{},
    removeItem: ()=>{},
    clearItem: ()=>{},
});



const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = item => setCartItems(groupAddedItemToCart(cartItems, item));
    const removeItem = item => setCartItems(clearRemovedItemFromCart(cartItems, item));
    const clearItem = item => setCartItems(clearItemFromCart(cartItems, item));


    useEffect( ()=>{
        setCartItemsCount(countCartItems(cartItems));
        setTotalPrice(countTotalPrice(cartItems));
    }, [cartItems]);



    return (
        <CartContext.Provider value={{
            hidden,
            cartItems,
            cartItemsCount,
            totalPrice,
            toggleHidden,
            addItem,
            removeItem,
            clearItem,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
