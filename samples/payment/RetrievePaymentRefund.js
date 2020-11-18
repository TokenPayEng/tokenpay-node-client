const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

tokenPay.payment().retrievePaymentRefund(1)
  .then(results => console.info('Retrieve payment refund response', results))
  .catch(err => console.error('Failed to retrieve payment refund', err));
