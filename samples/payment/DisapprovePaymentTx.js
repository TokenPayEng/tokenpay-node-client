const TokenPay = require('../../dist');

// Example: Disapprove Payment Tx

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  paymentTransactionIds: [100,101],
  isTransactional: false
};

tokenPay.payment().disapprovePaymentTransaction(request)
  .then(results => console.info('Disapprove payment txs response', results))
  .catch(err => console.error('Failed to disapprove payment txs', err));
