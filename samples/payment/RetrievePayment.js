const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const id = 1;

tokenPay.payment().retrievePayment(id)
  .then(payment => console.info('Payment retrieved', payment))
  .catch(err => console.error('Failed to retrieve payment', err));
