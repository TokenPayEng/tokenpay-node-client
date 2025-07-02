const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

tokenPay.payment().retrieveCheckoutPayment('fe4b0c2d-3c48-4553-9429-695d204bd7c1')
  .then(result => console.info('retrieve checkout payment successful', result))
  .catch(err => console.error('Failed to retrieve checkout payment', err));
