const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

tokenPay.installment().retrieveBinNumber('525864')
  .then(result => console.info('Search bin number information', result))
  .catch(err => console.error('Failed to search bin number information', err));
