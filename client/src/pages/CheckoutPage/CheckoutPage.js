import React from 'react';
import PropTypes from 'prop-types';
import './checkoutePage.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton";


const CheckoutPage = ({cartItems, totalPrice}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>

                <div className='header-blok'>
                   <span>Product</span>
                </div>
                <div className='header-blok'>
                    <span>Description</span>
                </div>
                <div className='header-blok'>
                    <span>Quantity</span>
                </div>
                <div className='header-blok'>
                    <span>Price</span>
                </div>
                <div className='header-blok'>
                    <span>Remove</span>
                </div>

            </div>
            {
                cartItems.map( item => (
                    <CheckoutItem key={item.id} item={item}/>
                ))
            }

            <div className='total-price'>Total: ${totalPrice}</div>
            <StripeButton price={totalPrice}/>
            <h3>4242424242424242</h3>
        </div>
    );
};

CheckoutPage.propTypes = {
    cartItems:PropTypes.array.isRequired,
    totalPrice: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
