const TokenPay = require('../../dist');

// Example: Init 3DS Payment

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0,
  installment: 1,
  conversationId: 'd1811bb0-25a2-40c7-ba71-c8b605259611',
  currency: 'TRY',
  paymentGroup: 'Product',
  card: {
    cardHolderName: 'Berkay Dinçer',
    cardNumber: '5406670000000009',
    expireYear: '2035',
    expireMonth: '11',
    cvc: '123'
  },
  items: [
    {
      name: 'Pharmaton',
      price: 30.0,
      subMerchantId: 1,
      subMerchantPrice: 27.0
    },
    {
      name: 'Supradyn',
      price: 50.0,
      subMerchantId: 1,
      subMerchantPrice: 42.0
    },
    {
      name: 'Aspirin',
      price: 20.0,
      subMerchantId: 1,
      subMerchantPrice: 18.0
    }
  ]
};

tokenPay.payment().init3DSPayment(request)
  .then(result => console.info('Init 3ds successful', result))
  .catch(err => console.error('Init 3ds failed', err));
