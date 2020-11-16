const TokenPay = require('../../dist');

// Sample: Search Installments
// Given a BIN number, price and currency, retrieves valid installment counts

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  binNumber: '525864',
  price: 100,
  currency: TokenPay.Model.Currency.TRY
};

tokenPay.installment().searchInstallments(request)
  .then(result => console.info('Searched installments', result))
  .catch(err => console.error('Failed to search installments', err));
