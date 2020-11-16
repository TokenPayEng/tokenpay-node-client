const TokenPay = require('../../dist');

// Sample: Cancel Cross-booking
// Cancels a cross-booking operation by its ID

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  crossBookingId: 17
};

tokenPay.payment().cancelCrossBooking(request)
  .then(result => console.info('Successfully cancelled cross-booking', result))
  .catch(err => console.error('Failed to cancel cross-booking', err));
