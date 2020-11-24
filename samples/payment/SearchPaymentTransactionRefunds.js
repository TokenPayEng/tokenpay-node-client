const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  paymentId: 1
};

tokenPay.payment().searchPaymentTransactionRefunds(request)
  .then(results => console.info('Search payment transaction refunds response', results))
  .catch(err => console.error('Failed to search payment transaction refunds', err));
