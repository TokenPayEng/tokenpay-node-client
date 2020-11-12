import TokenPayClient from '../../dist';

import Currency from '../../dist/model/Currency';
import PaymentGroup from '../../dist/model/PaymentGroup';

// Example: Create Payment (ES6)
// Creates a payment with a paid price of 100.0 TRY

const tokenPay = new TokenPayClient({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0,
  installment: 1,
  conversationId: 'foo-bar',
  currency: Currency.TRY,
  paymentGroup: PaymentGroup.Product,
  card: {
    cardHolderName: 'Ahmet Mehmet',
    cardNumber: '5406670000000009',
    expireYear: '2035',
    expireMonth: '11',
    cvc: '123'
  },
  items: [
    {
      name: 'Item 1',
      price: 30.0,
      subMerchantId: 1,
      subMerchantPrice: 27.0
    },
    {
      name: 'Item 2',
      price: 50.0,
      subMerchantId: 1,
      subMerchantPrice: 42.0
    },
    {
      name: 'Sanitizer',
      price: 20.0,
      subMerchantId: 1,
      subMerchantPrice: 18.0
    }
  ]
};

tokenPay.payment().createPayment(request)
  .then(result => console.log('Payment successful', result))
  .catch(err => console.error('Payment failed', err));
