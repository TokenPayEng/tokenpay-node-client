import TokenPayClient from '../../dist';

import Currency from '../../dist/model/Currency';
import PaymentGroup from '../../dist/model/PaymentGroup';

// Sample: Create Payment (ES6)
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
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  currency: Currency.TRY,
  paymentGroup: PaymentGroup.Product,
  card: {
    cardHolderName: 'Haluk Demir',
    cardNumber: '5258640000000001',
    expireYear: '2044',
    expireMonth: '07',
    cvc: '000'
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
      name: 'Item 3',
      price: 20.0,
      subMerchantId: 1,
      subMerchantPrice: 18.0
    }
  ]
};

tokenPay.payment().createPayment(request)
  .then(result => console.log('Payment successful', result))
  .catch(err => console.error('Payment failed', err));
