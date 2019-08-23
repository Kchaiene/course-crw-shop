import React from 'react';
import PropTypes from 'prop-types';
import './checkoutItem.scss';
import {connect} from'react-redux';
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../redux/cart/cartActions";


const CheckoutItem = ({item, dispatch}) => {
    const {imageUrl, price, name, quantity} = item;

    const onRemove = e => {
        dispatch(clearItemFromCart(item));
    };
    const onIncrease = e => {
        dispatch(addItemToCart(item));
    };
    const onDecrease = e => {
        dispatch(removeItemFromCart(item));
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
            <div className='remove-button' onClick={onRemove}>
                &#10005;
            </div>
        </div>
    );
};

CheckoutItem.propTypes = {
    item:PropTypes.object,
};

export default connect()(CheckoutItem);
