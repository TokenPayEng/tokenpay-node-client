const TokenPay = require('../../dist');

// Sample: Send Money
// Sends a particular amount of money to a given submerchant

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  reason: 'Ön Anlaşma Bonusu', // todo
  price: 100,
  currency: TokenPay.Model.Currency.TRY,
  subMerchantId: 3
};

tokenPay.payment().sendMoney(request)
  .then(result => console.info('Successfully sent money', result))
  .catch(err => console.error('Failed to send money', err));
