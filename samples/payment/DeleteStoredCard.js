const TokenPay = require('../../dist');

// Example: Delete Stored Card
// Deletes a stored card

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

tokenPay.payment()
  .deleteStoredCard({
    cardToken: 'fac377f2-ab15-4696-88d2-5e71b27ec378',
    cardUserKey: '11a078c4-3c32-4796-90b1-51ee5517a212'
  })
  .then(() => console.info('Stored card deleted'))
  .catch(err => console.error('Failed to delete stored card', err));;
