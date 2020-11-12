const TokenPay = require('../../dist');

// Example: Retrieve Buyer
// Retrieves a buyer by their ID

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

tokenPay.onboarding().retrieveBuyer(4)
  .then(result => console.info('Buyer retrieved', result))
  .catch(err => console.error('Failed to retrieve buyer', err));
