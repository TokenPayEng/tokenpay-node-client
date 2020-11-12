const TokenPay = require('../../dist');

// Example: Retrieve Refund

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

tokenPay.payment().retrieveRefund(1)
  .then(results => console.info('Retrieve refund response', results))
  .catch(err => console.error('Failed to retrieve refund', err));
