const TokenPay = require('../../dist');

// Example: Search Stored Cards
// Searches for stored cards

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

tokenPay.payment()
  .searchStoredCards({
    cardAlias: '62-Garanti-123',
    cardBankName: 'Garanti',
    cardBrand: 'Bonus',
    cardAssociation: 'VISA',
    cardToken: '6d882057-d3ac-4ecb-bb9a-72755823d50a',
    cardUserKey: '10cd1593-a6aa-4180-9a3e-663cfcc61c11',
    cardType: TokenPay.Model.CardType.CreditCard
  })
  .then(results => console.log('Retrieved stored card search results', results))
  .catch(err => console.err('Failed to delete stored card', err));;
