import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout'



const StripeButton = props => {
    const {price} = props;
    const priceForStripe = price * 100;
    const piblishableKey = `pk_test_MIq8vQqDK1he0QInjUpaFEhS00yUKdm9bk`

    const onToken = token=>{
        console.log('StripeButton', token);
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

