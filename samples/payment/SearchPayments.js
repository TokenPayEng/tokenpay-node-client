const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  paymentIds: [1, 2, 3]
};

tokenPay.payment().searchPayments(request)
  .then(results => console.info('Search payment search results', results))
  .catch(err => console.error('Failed to search payments', err));
