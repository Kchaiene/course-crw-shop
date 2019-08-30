import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './checkoutItem.scss';
import {connect} from'react-redux';
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../redux/cart/cartActions";
import {CartContext} from "../../providers/cart/cartProvider";


const CheckoutItem = ({item}) => {
    const {imageUrl, price, name, quantity} = item;
    const { removeItem, addItem, clearItem} = useContext(CartContext);


    const onClear = e => {
        clearItem(item);
    };
    const onIncrease = e => {
        addItem(item);
    };
    const onDecrease = e => {
        removeItem(item);
    };


    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='Item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={onDecrease} >&#10094;</div>
                <span className='value'> {quantity}</span>
                <div className='arrow' onClick={onIncrease}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={onClear}>
                &#10005;
            </div>
        </div>
    );
};

CheckoutItem.propTypes = {
    item:PropTypes.object,
};

export default CheckoutItem;
