const TokenPay = require('../../dist');

// Sample: Update Buyer
// Updates a buyer

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  email: 'haluk.demir@example.com',
  gsmNumber: '905551111111',
  name: 'Haluk',
  surname: 'Demir',
  identityNumber: '11111111110'
};

tokenPay.onboarding().updateBuyer(1, request)
  .then(result => console.info('Buyer updated', result))
  .catch(err => console.error('Failed to update buyer', err));
