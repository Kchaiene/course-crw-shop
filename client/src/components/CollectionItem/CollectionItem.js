import React, {useContext} from 'react';
 import "./collectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";
import {connect} from 'react-redux';
import {addItemToCart} from "../../redux/cart/cartActions";
import {CartContext} from "../../providers/cart/cartProvider";


const CollectionItem = ({item, addItemToCart}) => {
    const {addItem} = useContext(CartContext);
    const {id, price, name, imageUrl} = item;

    const onClick = e => {
        addItem(item);
        //addItemToCart(item);
    };
    return (
        <div className='collection-item'>
            <div className='image'
                 style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name' >{name}</span>
                <span className='price' >{price}$</span>
            </div>
            <CustomButton onClick={onClick} customType='inverted' >Add to Cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem) ;
