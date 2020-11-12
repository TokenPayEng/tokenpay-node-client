const TokenPay = require('../../dist');

// Example: Refund Payment Tx

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

tokenPay.payment().retrieveRefundTransaction(1)
  .then(results => console.info('Retrieve refund payment tx response', results))
  .catch(err => console.error('Failed to retrieve refund payment tx', err));
