const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  paymentId: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  refundDestinationType: TokenPay.Model.RefundDestinationType.Card,
};

tokenPay.payment().refundPayment(request)
  .then(results => console.info('Refund payment response', results))
  .catch(err => console.error('Failed to refund payment', err));
