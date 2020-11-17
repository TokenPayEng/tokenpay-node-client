const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  reason: 'Receive Money',
  price: 100,
  currency: TokenPay.Model.Currency.TRY,
  subMerchantId: 1
};

tokenPay.payment().receiveMoney(request)
  .then(result => console.info('Successfully received money', result))
  .catch(err => console.error('Failed to receive money', err));
