const TokenPay = require('../../dist');

// Example: Receive Money
// Receives a particular amount of money from a given submerchant

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  reason: 'İşgaliye Harcı',
  price: 100,
  currency: TokenPay.Model.Currency.TRY,
  subMerchantId: 3
};

tokenPay.payment().receiveMoney(request)
  .then(result => console.info('Successfully received money', result))
  .catch(err => console.error('Failed to receive money', err));
