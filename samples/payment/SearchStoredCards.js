const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  cardAlias: 'My YKB Card',
  cardBankName: 'YAPI VE KREDİ BANKASI A.Ş.',
  cardBrand: 'World',
  cardAssociation: TokenPay.Model.CardAssociation.MasterCard,
  cardToken: 'fac377f2-ab15-4696-88d2-5e71b27ec378',
  cardUserKey: '11a078c4-3c32-4796-90b1-51ee5517a212',
  cardType: TokenPay.Model.CardType.CreditCard
};

tokenPay.payment().searchStoredCards(request)
  .then(results => console.info('Search stored card search results', results))
  .catch(err => console.err('Failed to search stored card', err));
