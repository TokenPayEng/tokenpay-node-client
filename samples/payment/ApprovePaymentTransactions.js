const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  paymentTransactionIds: [1, 2],
  isTransactional: true
};

tokenPay.payment().approvePaymentTransactions(request)
  .then(results => console.info('Approve payment transactions response', results))
  .catch(err => console.error('Failed to approve payment transactions', err));
