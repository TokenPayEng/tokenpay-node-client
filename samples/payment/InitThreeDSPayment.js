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
  paymentGroup: TokenPay.Model.PaymentGroup.Product,
  callbackUrl: 'https://www.your-website.com/tokenpay-3DSecure-callback',
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

tokenPay.payment().init3DSPayment(request)
  .then(result => console.info('Init 3ds payment successful', result))
  .catch(err => console.error('Failed to init 3ds payment', err));
