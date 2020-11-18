const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  paymentTransactionIds: [1, 2],
  isTransactional: false
};

tokenPay.payment().disapprovePaymentTransactions(request)
  .then(results => console.info('Disapprove payment transactions response', results))
  .catch(err => console.error('Failed to disapprove payment transactions', err));
