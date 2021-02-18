const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  name: 'Haluk',
  page: 0,
  size: 25
};

tokenPay.onboarding().searchBuyers(request)
  .then(result => console.info('Retrieved buyer search results', result))
  .catch(err => console.error('Failed to search buyers', err));
