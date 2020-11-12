const TokenPay = require('../../dist');

// Example: Search Submerchants
// Retrieves a submerchant by their ID

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  name: 'tarman',
  page: 0,
  size: 25,
  subMerchantExternalId: '193184',
  subMerchantIds: [7, 8],
  subMerchantType: TokenPay.Model.SubMerchantType.LimitedOrStockJointCompany
};

tokenPay.onboarding().searchSubMerchants(request)
  .then(result => console.info('Retrieved submerchant search results', result))
  .catch(err => console.error('Failed to search submerchants', err));
