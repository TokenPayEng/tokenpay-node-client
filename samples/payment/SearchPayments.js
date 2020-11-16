const TokenPay = require('../../dist');

// Sample: Search Payments
// Searches for payments with IDs 1, 2, and 99999

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  paymentIds: [1, 2, 99999]
};

tokenPay.payment().search(request)
  .then(results => console.info('Retrieved payment search results', results))
  .catch(err => console.error('Failed to search payments', err));
