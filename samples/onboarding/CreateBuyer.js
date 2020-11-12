const TokenPay = require('../../dist');

// Example: Create Buyer
// Creates a buyer

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  buyerExternalId: '48912312',
  email: 'hikmet.altun@tokenpay.com.tr',
  gsmNumber: '+905551111111',
  name: 'Hikmet',
  surname: 'Altun',
  tckn: '94625132918'
};

tokenPay.onboarding().createBuyer(request)
  .then(result => console.info('Buyer created', result))
  .catch(err => console.error('Failed to create buyer', err));
