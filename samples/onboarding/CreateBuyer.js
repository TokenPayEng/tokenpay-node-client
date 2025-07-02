const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  buyerExternalId: '0c46f36f-051a-4519-95b8-42823e367f4e',
  email: 'haluk.demir@example.com',
  gsmNumber: '905551111111',
  name: 'Haluk',
  surname: 'Demir',
  identityNumber: '11111111110'
};

tokenPay.onboarding().createBuyer(request)
  .then(result => console.info('Buyer created', result))
  .catch(err => console.error('Failed to create buyer', err));
