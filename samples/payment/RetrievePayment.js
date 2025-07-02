const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

tokenPay.payment().retrievePayment(1)
  .then(payment => console.info('Payment retrieved', payment))
  .catch(err => console.error('Failed to retrieve payment', err));
