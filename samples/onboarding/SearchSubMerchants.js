const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  name: 'Zeytinyağı Üretim',
  page: 0,
  size: 25,
  subMerchantIds: [1, 2],
  subMerchantType: TokenPay.Model.SubMerchantType.LimitedOrStockJointCompany
};

tokenPay.onboarding().searchSubMerchants(request)
  .then(result => console.info('Retrieved sub merchant search results', result))
  .catch(err => console.error('Failed to search sub merchants', err));
