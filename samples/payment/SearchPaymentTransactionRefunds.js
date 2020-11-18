const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  paymentId: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  paymentTransactionId: 1
};

tokenPay.payment().searchPaymentTransactionRefunds(request)
  .then(results => console.info('Search payment transaction refunds response', results))
  .catch(err => console.error('Failed to search payment transaction refunds', err));
