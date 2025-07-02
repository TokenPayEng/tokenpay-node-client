const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  paymentId: 1,
  refundDestinationType: TokenPay.Model.RefundDestinationType.Card,
};

tokenPay.payment().refundPayment(request)
  .then(results => console.info('Refund payment response', results))
  .catch(err => console.error('Failed to refund payment', err));
