const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  id: 1,
  contactName: 'Haluk',
  contactSurname: 'Demir',
  email: 'haluk.demir@example.com',
  gsmNumber: '905551111111',
  iban: 'TR270006701000000000000000',
  identityNumber: '11111111110',
  legalCompanyTitle: 'Dem Zeytinyağı Üretim Ltd. Şti.',
  name: 'Dem Zeytinyağı Üretim Ltd. Şti.',
  taxNumber: '1111111114',
  taxOffice: 'Erenköy',
  address: 'Suadiye Mah. Örnek Cd. No:23, 34740 Kadıköy/İstanbul'
};

tokenPay.onboarding().updateSubMerchant(request)
  .then(result => console.info('Sub merchant updated', result))
  .catch(err => console.error('Failed to update sub merchant', err));
