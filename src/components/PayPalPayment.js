import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = () => {
  const paypalOptions = {
    'client-id': 'AT4j0_nMzdBlhYsYXTAtT2gsbW5W-0jDoX9vgK3anAwzCvECagyffLz1B1K7D8SHXiapVi7TUa3SAULx', // Replace with your PayPal Client ID
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

  const onApprove = async (data, actions) => {
    try {
      const response = await fetch('https://localhost:5001/api/paypal/capture-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId: data.orderID }),
      });
  
      const result = await response.json();
      alert(result.Message);
    } catch (error) {
      console.error('Error capturing order:', error);
      alert('Payment capture failed. Please try again.');
    }
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