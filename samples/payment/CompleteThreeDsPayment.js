const TokenPay = require('../../dist');

// Example: Complete 3DS Payment

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  paymentId: 1
};

tokenPay.payment().complete3DSPayment(request)
  .then(result => console.info('Complete 3DS successful', result))
  .catch(err => console.error('Complete 3DS failed', err));
