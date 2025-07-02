const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0,
  installment: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  currency: TokenPay.Model.Currency.TRY,
  paymentGroup: TokenPay.Model.PaymentGroup.ListingOrSubscription,
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
      subMerchantPrice: 27.0,
      external_id: '123d1297-839e-4bd6-a13b-4be31a6e12a8',
      subMerchantId: 1
    },
    {
      name: 'Item 2',
      price: 50.0,
      subMerchantPrice: 42.0,
      external_id: '789d1297-839e-4bd6-a13b-4be31a6e13f7',
      subMerchantId: 2
    },
    {
      name: 'Item 3',
      price: 20.0,
      subMerchantPrice: 18.0,
      external_id: '3a1d1297-839e-4bd6-a13b-4be31a6e18e6',
      subMerchantId: 3
    }
  ]
};

tokenPay.payment().createPayment(request)
  .then(result => console.info('Payment successful', result))
  .catch(err => console.error('Payment failed', err));
