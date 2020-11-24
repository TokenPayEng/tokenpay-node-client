const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  contactName: 'Haluk',
  contactSurname: 'Demir',
  email: 'haluk.demir@example.com',
  gsmNumber: '905551111111',
  iban: 'TR930006701000000001111111',
  identityNumber: '11111111110',
  legalCompanyTitle: 'Dem Zeytinyağı Üretim Ltd. Şti.',
  name: 'Dem Zeytinyağı Üretim Ltd. Şti.',
  subMerchantExternalId: '5fd3e767-b850-4d70-bcdf-d3c42aab8b09',
  subMerchantType: TokenPay.Model.SubMerchantType.LimitedOrStockJointCompany,
  taxNumber: '1111111114',
  taxOffice: 'Erenköy',
  address: 'Suadiye Mah. Örnek Cd. No:23, 34740 Kadıköy/İstanbul'
};

tokenPay.onboarding().createSubMerchant(request)
  .then(result => console.info('Sub merchant created', result))
  .catch(err => console.error('Failed to create sub merchant', err));
