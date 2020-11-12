const TokenPay = require('../../dist');

// Example: Create Submerchant
// Creates a submerchant

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  contactName: 'Mustafa',
  contactSurname: 'Tarman',
  email: 'mustafa.tarman@tokenpay.com.tr',
  gsmNumber: '+905550000000',
  iban: 'TR320010009999901234567890',
  identityNumber: '12341234567',
  legalCompanyTitle: 'Tarman Zeytinyağı Üretim Ltd. Şti.',
  name: 'Tarman Zeytinyağı Üretim Ltd. Şti.',
  subMerchantExternalId: 193184,
  subMerchantType: TokenPay.Model.SubMerchantType.LimitedOrStockJointCompany,
  taxNumber: '1231234646',
  taxOffice: 'Erenköy',
  address: 'Suadiye, Emin Ali Paşa Cd. No:35, 34740 Kadıköy/İstanbul'
};

tokenPay.onboarding().createSubMerchant(request)
  .then(result => console.info('Submerchant created', result))
  .catch(err => console.error('Failed to create submerchant', err));
