const TokenPay = require('../../dist');

// Example: Retrieve Submerchant
// Retrieves a submerchant by their ID

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

tokenPay.onboarding().retrieveSubMerchant(7)
  .then(result => console.info('Retrieved submerchant', result))
  .catch(err => console.error('Failed to retrieve submerchant', err));
