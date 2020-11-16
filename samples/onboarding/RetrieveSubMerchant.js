const TokenPay = require('../../dist');

// Sample: Retrieve Sub merchant
// Retrieves a sub merchant by their ID

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

tokenPay.onboarding().retrieveSubMerchant(1)
  .then(result => console.info('Retrieved sub merchant', result))
  .catch(err => console.error('Failed to retrieve sub merchant', err));
