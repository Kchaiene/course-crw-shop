import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';


const StripeButton = props => {
    const {price} = props;
    const priceForStripe = price * 100;
    const piblishableKey = `pk_test_MIq8vQqDK1he0QInjUpaFEhS00yUKdm9bk`;

    const onToken = async token=>{
        try {
            const res = await axios({
                url:'payment',
                method: 'post',
                data: {
                    amount:priceForStripe,
                    token
                }
            });
            alert("Payment SUCCESS!!")
        } catch (e) {
            console.error('Error => StripeButton onToken', e);
            alert('Error');
        }
    };

    return (
        <StripeCheckout
            label='PAY AND BE HAPPY'
            name={`CRWN Clothing`}
            billingAddress
            shippingAddress
            image={`https://`}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel={`Pay Now`}
            stripeKey={piblishableKey}
            token={onToken}
        />

    );
};

StripeButton.propTypes = {
    price: PropTypes.number,
};

export default StripeButton;

