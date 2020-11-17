const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  destinationMerchantId: 2,
  destinationMerchantType: TokenPay.Model.MerchantType.SubMerchant,
  sourceMerchantId: 1,
  sourceMerchantType: TokenPay.Model.MerchantType.Merchant,
  transactionStatus: TokenPay.Model.CrossBookingTransactionStatus.WaitingForPayout,
  page: 0,
  size: 25
};

tokenPay.payment().searchCrossBookings(request)
  .then(results => console.info('Retrieved cross-booking search results', results))
  .catch(err => console.error('Failed to retrieve cross-booking search results', err));
