import React from 'react'
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    const priceToStripe = price * 100;
    const publishableKey = "pk_test_51H1lOTHg8xjNbFP2uTR4vfwTdsV50Mp07LzMh1ee0VjtwImL01rhtJGJFEKKJN7Dpa33A0px9P88d8mRI0vnV28g00uTG41X4R";
    const onToken = token => {
        console.log(token);
        alert("Payment Success");
    }
    return (
        
            <StripeCheckout
            label="Pay Now"
            name="Vicky Cloth Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Total is ₹${price}`}
            amount={priceToStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            />
        
    )
}

export default StripeCheckoutButton;
