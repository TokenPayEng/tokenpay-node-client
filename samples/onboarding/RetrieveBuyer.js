const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

tokenPay.onboarding().retrieveBuyer(1)
  .then(result => console.info('Buyer retrieved', result))
  .catch(err => console.error('Failed to retrieve buyer', err));
