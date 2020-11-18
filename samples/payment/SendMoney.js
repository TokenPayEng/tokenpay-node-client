const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  reason: 'Send Money',
  price: 100,
  currency: TokenPay.Model.Currency.TRY,
  subMerchantId: 1
};

tokenPay.payment().sendMoney(request)
  .then(result => console.info('Successfully sent money', result))
  .catch(err => console.error('Failed to send money', err));
