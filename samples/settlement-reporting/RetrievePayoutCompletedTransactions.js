const TokenPay = require('../../dist');

// Sample: Retrieve Payout Completed Transactions
// Retrieves settlement rows for transactions that have been paid out

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request = {
  settlementFileId: 15,
  settlementType: TokenPay.Model.SettlementType.Settlement,
  startDate: new Date(),
  endDate: new Date(Date.now() - 24 * 60 * 60 * 1000)
};

tokenPay.settlementReporting().retrievePayoutCompletedTransactions(request)
  .then(result => console.info('Retrieved settlement rows for paid out transactions', result))
  .catch(err => console.error('Failed to retrieve settlement rows for paid out transactions', err));
