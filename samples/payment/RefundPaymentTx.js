const TokenPay = require('../../dist');

// Sample: Refund Payment Tx

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  paymentTransactionId: 1,
  conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
  refundPrice: 20,
  refundDestinationType: 'CARD' // todo
};

tokenPay.payment().refundPaymentTransaction(request)
  .then(results => console.info('Refund payment tx response', results))
  .catch(err => console.error('Failed to refund payment tx', err));
