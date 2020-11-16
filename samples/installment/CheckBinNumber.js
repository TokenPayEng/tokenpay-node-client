const TokenPay = require('../../dist');

// Sample: Check BIN Number
// Retrieves information about a BIN number

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

tokenPay.installment().checkBinNumber('525864')
  .then(result => console.info('Retrieved BIN number information', result))
  .catch(err => console.error('Failed to retrieve BIN number information', err));
