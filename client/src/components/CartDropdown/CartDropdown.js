import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from "../CustomButton/CustomButton";
import './cartDropdown.scss';
import {connect} from 'react-redux';
import CartItem from "../CartIrem/CartItem";
import {selectCartItems} from "../../redux/cart/cartSelectors";
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from "../../redux/cart/cartActions";


const CartDropdown = ({cartItems, history, dispatch}) => {
    const onClick = e =>{
        history.push('/checkout');
        dispatch(toggleCartHidden());
    };
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>

                { cartItems.length ?
                    cartItems.map( item => (
                         <CartItem key={item.id} item={item}/>
                     ))
                    : <span className='empty-message'> Your cart is empty </span>
                }
            </div>
            <CustomButton onClick={onClick}> GO TO CHECKOUT</CustomButton>
        </div>
    );
};

CartDropdown.propTypes = {
    cartItems: PropTypes.array,
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
