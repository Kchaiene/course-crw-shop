import React, {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg';
import './cartIcon.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from "../../redux/cart/cartActions";
import PropTypes from 'prop-types';
import {selectCartItemsCount} from "../../redux/cart/cartSelectors";
import {CartContext} from "../../providers/cart/cartProvider";


const CartIcon = (props) => {
    const {toggleHidden, cartItemsCount} = useContext(CartContext);

    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    );
};



export default CartIcon;
