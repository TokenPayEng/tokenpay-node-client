const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

tokenPay.payment().retrievePaymentTransactionRefund(1)
  .then(results => console.info('Retrieve payment transaction refund response', results))
  .catch(err => console.error('Failed to retrieve payment transaction refund', err));
