const TokenPay = require('../../dist');

// Example: Approve Payment Tx

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  paymentTransactionIds: [100,101],
  isTransactional: false
};

tokenPay.payment().approvePaymentTransaction(request)
  .then(results => console.info('Approve payment txs response', results))
  .catch(err => console.error('Failed to approve payment txs', err));
