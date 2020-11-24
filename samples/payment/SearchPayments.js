const TokenPay = require('../../dist');
const { default: Currency } = require('../../dist/model/Currency');
const { default: PaymentStatus } = require('../../dist/model/PaymentStatus');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  currency: Currency.TRY,
  paymentStatus: PaymentStatus.Success
};

tokenPay.payment().searchPayments(request)
  .then(results => console.info('Search payment search results', results))
  .catch(err => console.error('Failed to search payments', err));
