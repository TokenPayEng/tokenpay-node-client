const TokenPay = require('../../dist');

// Sample: Retrieve Payment
// Retrieves the payment with ID 1

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const id = 1;

tokenPay.payment().retrieve(id)
  .then(payment => console.info('Payment retrieved', payment))
  .catch(err => console.error('Failed to retrieve payment', err));
