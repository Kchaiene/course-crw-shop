import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import CustomButton from "../CustomButton/CustomButton";
import './cartDropdown.scss';
import {connect} from 'react-redux';
import CartItem from "../CartIrem/CartItem";
import {selectCartItems} from "../../redux/cart/cartSelectors";
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from "../../redux/cart/cartActions";
import {CartContext} from "../../providers/cart/cartProvider";


const CartDropdown = ({ history}) => {
    const {cartItems, toggleHidden} = useContext(CartContext);

    const onClick = e =>{
        history.push('/checkout');
        toggleHidden();
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


export default withRouter(CartDropdown);
