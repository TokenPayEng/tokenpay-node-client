const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
  endDate: Date.now()
};

tokenPay.settlementReporting().searchBouncedSubMerchantRows(request)
  .then(result => console.info('Retrieve bounced sub merchant rows', result))
  .catch(err => console.error('Failed to retrieve bounced sub merchant rows', err));
