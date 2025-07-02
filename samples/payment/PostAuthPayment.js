const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  paidPrice: 100
};

tokenPay.payment().postAuthPayment(1, request)
  .then(result => console.info('Post auth payment successful', result))
  .catch(err => console.error('Failed to post auth payment', err));
