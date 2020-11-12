const TokenPay = require('../../dist');

// Example: Refund Payment

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  paymentId: 1,
  conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
  refundDestinationType: 'CARD'
}

tokenPay.payment().refundPayment(request)
  .then(results => console.info('Refund payment response', results))
  .catch(err => console.error('Failed to refund payment', err));
