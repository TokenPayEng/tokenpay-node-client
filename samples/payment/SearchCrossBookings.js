const TokenPay = require('../../dist');

// Sample: Search Cross-bookings
// Searches for cross-bookings that match the given criteria

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  destinationMerchantId: 3,
  destinationMerchantType: TokenPay.Model.MerchantType.SubMerchant,
  sourceMerchantId: 1,
  sourceMerchantType: TokenPay.Model.MerchantType.Merchant,
  page: 0,
  size: 25
};

tokenPay.payment().searchCrossBookings(request)
  .then(results => console.info('Retrieved cross-booking search results', results))
  .catch(err => console.error('Failed to retrieve cross-booking search results', err));
