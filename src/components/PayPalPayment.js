import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = () => {
  const paypalOptions = {
    'client-id': 'YOUR_PAYPAL_CLIENT_ID', // Replace with your PayPal Client ID
    currency: 'USD', // Set the currency
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '10.00', // Set the payment amount
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert('Payment completed by ' + details.payer.name.given_name);
      console.log('Payment details:', details);
    });
  };

  const onError = (error) => {
    console.error('PayPal error:', error);
    alert('Payment failed. Please try again.');
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;