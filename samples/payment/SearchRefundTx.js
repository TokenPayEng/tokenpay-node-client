const TokenPay = require('../../dist');

// Example: Search Refund Tx

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  paymentId: 1,
  conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
  paymentTransactionId: 102
}

tokenPay.payment().searchRefundTransactions(request)
  .then(results => console.info('Search refund tx response', results))
  .catch(err => console.error('Failed to search refund tx', err));
