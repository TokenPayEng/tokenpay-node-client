const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  crossBookingId: 1
};

tokenPay.payment().cancelCrossBooking(request)
  .then(result => console.info('Successfully cancelled cross-booking', result))
  .catch(err => console.error('Failed to cancel cross-booking', err));
