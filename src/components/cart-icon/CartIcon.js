import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg';
import './cartIcon.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from "../../redux/cart/cartActions";
import PropTypes from 'prop-types';
import {selectCartItemsCount} from "../../redux/cart/cartSelectors";

const CartIcon = ({toggleCartHidden, cartItemsCount = 0}) => {

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    );
};

CartIcon.propTypes = {
    toggleCartHidden: PropTypes.func.isRequired,
    cartItemsCount: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    cartItemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
