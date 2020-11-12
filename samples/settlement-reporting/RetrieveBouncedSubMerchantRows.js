const TokenPay = require('../../dist');

// Example: Retrieve Bounced Submerchant Rows
// Retrieves bounced settlement rows of submerchants

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  startDate: new Date(),
  endDate: new Date(Date.now() - 24 * 60 * 60 * 1000)
};

tokenPay.settlementReporting().retrieveBouncedSubMerchantRows(request)
  .then(result => console.info('Retrieved bounced submerchant settlement rows', result))
  .catch(err => console.error('Failed to retrieve bounced submerchant settlement rows', err));
