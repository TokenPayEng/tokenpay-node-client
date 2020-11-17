const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  name: 'demir',
  page: 0,
  size: 25,
  subMerchantExternalId: '5fd3e767-b850-4d70-bcdf-d3c42aab8b09',
  subMerchantIds: [1, 2],
  subMerchantType: TokenPay.Model.SubMerchantType.LimitedOrStockJointCompany
};

tokenPay.onboarding().searchSubMerchants(request)
  .then(result => console.info('Retrieved sub merchant search results', result))
  .catch(err => console.error('Failed to search sub merchants', err));
