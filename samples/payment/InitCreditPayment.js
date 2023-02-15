const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  price: 100.0,
  installment: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d32432',
  currency: TokenPay.Model.Currency.TRY,
  creditorId: 1,
  callbackUrl: "NO_CALLBACK_URL",
  paymentGroup: TokenPay.Model.PaymentGroup.ListingOrSubscription,
  items: [
    {
      name: 'Item 1',
      price: 30.0,
      subMerchantId: 1
    },
    {
      name: 'Item 2',
      price: 50.0,
      subMerchantId: 1
    },
    {
      name: 'Item 3',
      price: 20.0,
      subMerchantId: 1
    }
  ]
};

tokenPay.payment().initCreditPayment(request)
  .then(result => console.info('Payment successful', result))
  .catch(err => console.error('Payment failed', err));
