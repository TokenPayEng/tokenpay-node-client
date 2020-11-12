const TokenPay = require('../../dist');

// Example: Update Buyer
// Updates a buyer

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  email: 'hikmet.altun@tokenpay.com.tr',
  gsmNumber: '+905551111111',
  name: 'Hikmet',
  surname: 'Altun',
  tckn: '94625132918'
};

tokenPay.onboarding().updateBuyer(4, request)
  .then(result => console.info('Buyer updated', result))
  .catch(err => console.error('Failed to update buyer', err));
