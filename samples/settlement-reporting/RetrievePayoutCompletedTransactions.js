const TokenPay = require('../../dist');

const tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  settlementFileId: 1,
  settlementType: TokenPay.Model.SettlementType.Settlement,
  startDate: new Date(),
  endDate: new Date(Date.now() - 24 * 60 * 60 * 1000)
};

tokenPay.settlementReporting().listPayoutCompletedTransactions(request)
  .then(result => console.info('Retrieve settlement rows for paid out transactions', result))
  .catch(err => console.error('Failed to retrieve settlement rows for paid out transactions', err));
