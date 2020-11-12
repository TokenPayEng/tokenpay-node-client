const TokenPay = require('../../dist');

// Example: Retrieve Installments
// Given a BIN number, price and currency, retrieves valid installment counts

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  binNumber: '544078',
  price: 100,
  currency: TokenPay.Model.Currency.TRY
};

tokenPay.installment().retrieveInstallments(request)
  .then(result => console.info('Retrieved installments', result))
  .catch(err => console.error('Failed to retrieve installments', err));
