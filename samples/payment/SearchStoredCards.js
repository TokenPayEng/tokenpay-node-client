const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  cardAlias: 'My YKB Card',
  cardBankName: 'YAPI VE KREDİ BANKASI A.Ş.',
  cardBrand: 'World',
  cardAssociation: TokenPay.Model.CardAssociation.MasterCard,
  cardToken: 'd9b19d1a-243c-43dc-a498-add08162df72',
  cardUserKey: 'c115ecdf-0afc-4d83-8a1b-719c2af19cbd',
  cardType: TokenPay.Model.CardType.CreditCard
};

tokenPay.payment().searchStoredCards(request)
  .then(results => console.info('Search stored card search results', results))
  .catch(err => console.err('Failed to search stored card', err));
