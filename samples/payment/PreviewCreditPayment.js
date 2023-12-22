const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
    amount: "1000",
    productType: "10",
    creditorId: 4,
};

tokenPay.payment().previewCreditPayment(request)
  .then(result => console.info('Payment successful', result))
  .catch(err => console.error('Payment failed', err));
