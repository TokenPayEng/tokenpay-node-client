const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  cardUserKey: 'fac377f2-ab15-4696-88d2-5e71b27ec378',
  cardToken: '11a078c4-3c32-4796-90b1-51ee5517a212'
};

tokenPay.payment().deleteStoredCard(request)
  .then(() => console.info('Stored card deleted'))
  .catch(err => console.error('Failed to delete stored card', err));
