const test = require('ava');
const nock = require('nock');

const TokenPay = require('../../dist');

const settlementReportingAdapter = new TokenPay.Adapter.SettlementReportingAdapter({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

test('retrieveBouncedSubMerchantRows() should retrieve bounced settlement rows for submerchants', async t => {
  const startDate = new Date(Date.parse('2020-09-11 08:00:00+03:00'));
  const endDate = new Date(Date.parse('2020-09-12 08:00:00+03:00'));

  const request = {startDate, endDate};

  const queryString = `startDate=${encodeURIComponent(startDate.toISOString())}&endDate=${encodeURIComponent(endDate.toISOString())}`;

  const response = {
    page: 0,
    size: 25,
    totalSize: 2,
    items: [
      {
        id: 42,
        iban: 'TR320010009999901234567890',
        contactName: 'Luke',
        contactSurname: 'Skywalker',
        legalCompanyTitle: 'Skywalker Aviation'
      },
      {
        id: 81,
        iban: 'TR320010009999901234567890',
        contactName: 'Obi Wan',
        contactSurname: 'Kenobi',
        legalCompanyTitle: 'Uncle Ben Consultancy'
      }
    ]
  };

  nock('http://localhost:8000')
    .get(`/settlement-reporting/v1/settlement-file/bounced-sub-merchant-rows?${queryString}`)
    .reply(200, {data: response});

  const {page, size, totalSize, items} = await settlementReportingAdapter.retrieveBouncedSubMerchantRows(request);
  t.is(page, 0);
  t.is(size, 25);
  t.is(totalSize, 2);
  t.is(items.length, 2);
  t.is(items[0].id, 42);
  t.is(items[0].iban, 'TR320010009999901234567890');
  t.is(items[0].contactName, 'Luke');
  t.is(items[0].contactSurname, 'Skywalker');
  t.is(items[0].legalCompanyTitle, 'Skywalker Aviation');
  t.is(items[1].id, 81);
  t.is(items[1].iban, 'TR320010009999901234567890');
  t.is(items[1].contactName, 'Obi Wan');
  t.is(items[1].contactSurname, 'Kenobi');
  t.is(items[1].legalCompanyTitle, 'Uncle Ben Consultancy');
});

test('retrievePayoutCompletedTransactions() should retrieve settlement rows for transactions that are already paid out', async t => {
  const startDate = new Date(Date.parse('2020-09-11 08:00:00+03:00'));
  const endDate = new Date(Date.parse('2020-09-12 08:00:00+03:00'));

  const request = {
    settlementFileId: 5,
    settlementType: TokenPay.Model.SettlementType.Settlement,
    startDate,
    endDate
  };

  const queryString = [
    `settlementFileId=5`,
    `settlementType=SETTLEMENT`,
    `startDate=${encodeURIComponent(startDate.toISOString())}`,
    `endDate=${encodeURIComponent(endDate.toISOString())}`
  ].join('&');

  const response = {
    page: 0,
    size: 25,
    totalSize: 1,
    items: [
      {
        transactionId: 1944213,
        transactionType: 'PAYMENT',
        payoutAmount: 42.42,
        currency: 'TRY',
        merchantId: 1,
        merchantType: 'MERCHANT'
      }
    ]
  };

  nock('http://localhost:8000')
    .get(`/settlement-reporting/v1/settlement-file/payout-completed-transactions?${queryString}`)
    .reply(200, {data: response});

  const {page, size, totalSize, items} = await settlementReportingAdapter.retrievePayoutCompletedTransactions(request);
  t.is(page, 0);
  t.is(size, 25);
  t.is(totalSize, 1);
  t.is(items.length, 1);
  t.is(items[0].transactionId, 1944213);
  t.is(items[0].transactionType, 'PAYMENT');
  t.is(items[0].payoutAmount, 42.42);
  t.is(items[0].currency, 'TRY');
  t.is(items[0].merchantId, 1);
  t.is(items[0].merchantType, 'MERCHANT');
});
