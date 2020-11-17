const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

tokenPay.onboarding().retrieveSubMerchant(1)
  .then(result => console.info('Retrieved sub merchant', result))
  .catch(err => console.error('Failed to retrieve sub merchant', err));
