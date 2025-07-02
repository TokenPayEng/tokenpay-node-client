const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  subMerchantId: 2,
  subMerchantPrice: 10
};

tokenPay.payment().updatePaymentTransaction(100, request)
  .then(results => console.info('Update payment transaction response', results))
  .catch(err => console.error('Failed to update payment transaction', err));
