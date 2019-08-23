import React from 'react';
import PropTypes from 'prop-types';
import './cartItem.scss';


const CartItem = ({item}) => {
    const {imageUrl, price, name, quantity} = item;
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='cart item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>

            </div>
        </div>
    );
};

CartItem.propTypes = {
    item:PropTypes.object,
};

export default CartItem;
