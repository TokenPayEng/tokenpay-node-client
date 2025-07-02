const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  paymentId: 1
};

tokenPay.payment().complete3DSPayment(request)
  .then(result => console.info('Complete 3DS payment successful', result))
  .catch(err => console.error('Failed to complete 3DS payment', err));
