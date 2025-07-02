const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  binNumber: '525864',
  price: 100,
  currency: TokenPay.Model.Currency.TRY
};

tokenPay.installment().searchInstallments(request)
  .then(result => console.info('Search installments', result))
  .catch(err => console.error('Failed to search installments', err));
