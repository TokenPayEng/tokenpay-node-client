const test = require('ava');
const nock = require('nock');

const TokenPay = require('../../dist');

const paymentAdapter = new TokenPay.Adapter.PaymentAdapter({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

test('should pay', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/card-payments')
  .reply(200, {
    data: {
      id: 1,
      createdDate: '2020-09-11T10:00:00',
      price: 100.0,
      paidPrice: 100.0,
      walletPrice: 0.0,
      buyerId: 1,
      currency: 'TRY',
      installment: 1,
      conversationId: 'd1811bb0-25a2-40c7-ba71-c8b605259611',
      paymentStatus: 'SUCCESS',
      merchantCommissionRate: 10,
      merchantCommissionRateAmount: 0.1,
      binNumber: 424242,
      lastFourDigits: 4242,
      cardType: 'CREDIT_CARD',
      cardAssociation: 'MASTER_CARD',
      cardBrand: 'World',
      paymentTransactions: [
        {
          id: 1,
          externalId: 'fcf47134-12ee-4d37-bd2c-c46cd9297487',
          name: 'Pharmaton',
          transactionStatus: 'APPROVED',
          blockageResolvedDate: '2021-02-21T15:00:00',
          price: 30,
          paidPrice: 33,
          walletPrice: 0,
          merchantCommissionRate: 10,
          merchantCommissionRateAmount: 3,
          merchantPayoutAmount: 2.97,
          subMerchantId: 1,
          subMerchantPrice: 27,
          subMerchantPayoutRate: 90,
          subMerchantPayoutAmount: 29.7,
          pfCommissionRateAmount: 0,
          convertedPayout: {
            paidPrice: 33,
            currency: 'TRY',
            merchantPayoutAmount: 2.97,
            subMerchantPayoutAmount: 29.7,
            pfCommissionRateAmount: 0,
            pfConversionRateAmount: 0
          }
        },
        {
          id: 2,
          externalId: 'a5eb1ab1-2676-4c10-830d-cc204e0f2126',
          name: 'Supradyn',
          price: 50,
          paidPrice: 55,
          transactionStatus: 'APPROVED',
          blockageResolvedDate: '2021-02-21T15:00:00',
          walletPrice: 0,
          merchantCommissionRate: 10,
          merchantCommissionRateAmount: 5,
          merchantPayoutAmount: 8.25,
          subMerchantId: 2,
          subMerchantPrice: 42,
          subMerchantPayoutRate: 84,
          subMerchantPayoutAmount: 29.7,
          pfCommissionRateAmount: 0,
          convertedPayout: {
            paidPrice: 33,
            currency: 'TRY',
            merchantPayoutAmount: 2.97,
            subMerchantPayoutAmount: 29.7,
            pfCommissionRateAmount: 0,
            pfConversionRateAmount: 0
          }
        }
      ]
    },
  })

  const request = {
    price: 100.0,
    paidPrice: 100.0,
    walletPrice: 0.0,
    installment: 1,
    conversationId: 'foo-bar',
    currency: 'TRY',
    paymentGroup: TokenPay.Model.PaymentGroup.Product,
    card: {
      cardHolderName: 'Ahmet Mehmet',
      cardNumber: '5406670000000009',
      expireYear: '2044',
      expireMonth: '11',
      cvc: '123'
    },
    items: [
      {
        name: 'Pharmaton',
        price: 30.0,
        subMerchantId: 1,
        subMerchantPrice: 27.0
      },
      {
        name: 'Supradyn',
        price: 50.0,
        subMerchantId: 1,
        subMerchantPrice: 42.0
      }
    ]
  };

  const result = await paymentAdapter.createPayment(request)
  t.is(result.id, 1)
  t.is(result.price, 100)
  t.is(result.paidPrice, 100)
  t.is(result.buyerId, 1)
  t.is(result.currency, 'TRY')
  t.is(result.installment, 1)
  t.is(result.conversationId, 'd1811bb0-25a2-40c7-ba71-c8b605259611')
  t.is(result.paymentStatus, TokenPay.Model.PaymentStatus.Success)
  t.is(result.merchantCommissionRate, 10)
  t.is(result.merchantCommissionRateAmount, 0.1)
  t.is(result.binNumber, 424242)
  t.is(result.lastFourDigits, 4242)
  t.is(result.cardType, TokenPay.Model.CardType.CreditCard)
  t.is(result.cardAssociation, 'MASTER_CARD')
  t.is(result.cardBrand, 'World')
  t.is(result.paymentTransactions[0].id, 1)
  t.is(result.paymentTransactions[0].externalId, 'fcf47134-12ee-4d37-bd2c-c46cd9297487')
  t.is(result.paymentTransactions[0].name, 'Pharmaton')
  t.is(result.paymentTransactions[0].transactionStatus, TokenPay.Model.TransactionStatus.Approved)
  t.is(result.paymentTransactions[0].blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.paymentTransactions[0].price, 30)
  t.is(result.paymentTransactions[0].paidPrice, 33)
  t.is(result.paymentTransactions[0].walletPrice, 0)
  t.is(result.paymentTransactions[0].merchantCommissionRate, 10)
  t.is(result.paymentTransactions[0].merchantCommissionRateAmount, 3)
  t.is(result.paymentTransactions[0].merchantPayoutAmount, 2.97)
  t.is(result.paymentTransactions[0].subMerchantId, 1)
  t.is(result.paymentTransactions[0].subMerchantPrice, 27)
  t.is(result.paymentTransactions[0].subMerchantPayoutRate, 90)
  t.is(result.paymentTransactions[0].subMerchantPayoutAmount, 29.7)
  t.is(result.paymentTransactions[0].pfCommissionRateAmount, 0)

  t.is(result.paymentTransactions[1].id, 2)
  t.is(result.paymentTransactions[1].externalId, 'a5eb1ab1-2676-4c10-830d-cc204e0f2126')
  t.is(result.paymentTransactions[1].name, 'Supradyn')
  t.is(result.paymentTransactions[1].transactionStatus, TokenPay.Model.TransactionStatus.Approved)
  t.is(result.paymentTransactions[1].blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.paymentTransactions[1].price, 50)
  t.is(result.paymentTransactions[1].paidPrice, 55)
  t.is(result.paymentTransactions[1].walletPrice, 0)
  t.is(result.paymentTransactions[1].merchantCommissionRate, 10)
  t.is(result.paymentTransactions[1].merchantCommissionRateAmount, 5)
  t.is(result.paymentTransactions[1].merchantPayoutAmount, 8.25)
  t.is(result.paymentTransactions[1].subMerchantId, 2)
  t.is(result.paymentTransactions[1].subMerchantPrice, 42)
  t.is(result.paymentTransactions[1].subMerchantPayoutRate, 84)
  t.is(result.paymentTransactions[1].subMerchantPayoutAmount, 29.7)
  t.is(result.paymentTransactions[1].pfCommissionRateAmount, 0)

});

test('should retrive payment', async t => {
  const scope = nock('http://localhost:8000')
  .get('/payment/v1/card-payments/1')
  .reply(200, {
    data: {
      id: 1,
      createdDate: '2020-09-11T10:00:00',
      price: 100.0,
      paidPrice: 100.0,
      walletPrice: 0.0,
      buyerId: 1,
      currency: 'TRY',
      installment: 1,
      conversationId: 'd1811bb0-25a2-40c7-ba71-c8b605259611',
      paymentStatus: 'SUCCESS',
      merchantCommissionRate: 10,
      merchantCommissionRateAmount: 0.1,
      binNumber: 424242,
      lastFourDigits: 4242,
      cardType: 'CREDIT_CARD',
      cardAssociation: 'MASTER_CARD',
      cardBrand: 'World',
      paymentTransactions: [
        {
          id: 1,
          externalId: 'fcf47134-12ee-4d37-bd2c-c46cd9297487',
          name: 'Pharmaton',
          transactionStatus: 'APPROVED',
          blockageResolvedDate: '2021-02-21T15:00:00',
          price: 30,
          paidPrice: 33,
          walletPrice: 0,
          merchantCommissionRate: 10,
          merchantCommissionRateAmount: 3,
          merchantPayoutAmount: 2.97,
          subMerchantId: 1,
          subMerchantPrice: 27,
          subMerchantPayoutRate: 90,
          subMerchantPayoutAmount: 29.7,
          pfCommissionRateAmount: 0,
          convertedPayout: {
            paidPrice: 33,
            currency: 'TRY',
            merchantPayoutAmount: 2.97,
            subMerchantPayoutAmount: 29.7,
            pfCommissionRateAmount: 0,
            pfConversionRateAmount: 0
          }
        },
        {
          id: 2,
          externalId: 'a5eb1ab1-2676-4c10-830d-cc204e0f2126',
          name: 'Supradyn',
          price: 50,
          paidPrice: 55,
          transactionStatus: 'APPROVED',
          blockageResolvedDate: '2021-02-21T15:00:00',
          walletPrice: 0,
          merchantCommissionRate: 10,
          merchantCommissionRateAmount: 5,
          merchantPayoutAmount: 8.25,
          subMerchantId: 2,
          subMerchantPrice: 42,
          subMerchantPayoutRate: 84,
          subMerchantPayoutAmount: 29.7,
          pfCommissionRateAmount: 0,
          convertedPayout: {
            paidPrice: 33,
            currency: 'TRY',
            merchantPayoutAmount: 2.97,
            subMerchantPayoutAmount: 29.7,
            pfCommissionRateAmount: 0,
            pfConversionRateAmount: 0
          }
        }
      ]
    },
  })


  const result = await paymentAdapter.retrievePayment(1)

  t.is(result.id, 1)
  t.is(result.price, 100)
  t.is(result.paidPrice, 100)
  t.is(result.buyerId, 1)
  t.is(result.currency, TokenPay.Model.Currency.TRY)
  t.is(result.installment, 1)
  t.is(result.conversationId, 'd1811bb0-25a2-40c7-ba71-c8b605259611')
  t.is(result.paymentStatus, TokenPay.Model.PaymentStatus.Success)
  t.is(result.merchantCommissionRate, 10)
  t.is(result.merchantCommissionRateAmount, 0.1)
  t.is(result.binNumber, 424242)
  t.is(result.lastFourDigits, 4242)
  t.is(result.cardType, TokenPay.Model.CardType.CreditCard)
  t.is(result.cardAssociation, 'MASTER_CARD')
  t.is(result.cardBrand, 'World')
  t.is(result.paymentTransactions[0].id, 1)
  t.is(result.paymentTransactions[0].externalId, 'fcf47134-12ee-4d37-bd2c-c46cd9297487')
  t.is(result.paymentTransactions[0].name, 'Pharmaton')
  t.is(result.paymentTransactions[0].transactionStatus, TokenPay.Model.TransactionStatus.Approved)
  t.is(result.paymentTransactions[0].blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.paymentTransactions[0].price, 30)
  t.is(result.paymentTransactions[0].paidPrice, 33)
  t.is(result.paymentTransactions[0].walletPrice, 0)
  t.is(result.paymentTransactions[0].merchantCommissionRate, 10)
  t.is(result.paymentTransactions[0].merchantCommissionRateAmount, 3)
  t.is(result.paymentTransactions[0].merchantPayoutAmount, 2.97)
  t.is(result.paymentTransactions[0].subMerchantId, 1)
  t.is(result.paymentTransactions[0].subMerchantPrice, 27)
  t.is(result.paymentTransactions[0].subMerchantPayoutRate, 90)
  t.is(result.paymentTransactions[0].subMerchantPayoutAmount, 29.7)
  t.is(result.paymentTransactions[0].pfCommissionRateAmount, 0)

  t.is(result.paymentTransactions[1].id, 2)
  t.is(result.paymentTransactions[1].externalId, 'a5eb1ab1-2676-4c10-830d-cc204e0f2126')
  t.is(result.paymentTransactions[1].name, 'Supradyn')
  t.is(result.paymentTransactions[1].transactionStatus, TokenPay.Model.TransactionStatus.Approved)
  t.is(result.paymentTransactions[1].blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.paymentTransactions[1].price, 50)
  t.is(result.paymentTransactions[1].paidPrice, 55)
  t.is(result.paymentTransactions[1].walletPrice, 0)
  t.is(result.paymentTransactions[1].merchantCommissionRate, 10)
  t.is(result.paymentTransactions[1].merchantCommissionRateAmount, 5)
  t.is(result.paymentTransactions[1].merchantPayoutAmount, 8.25)
  t.is(result.paymentTransactions[1].subMerchantId, 2)
  t.is(result.paymentTransactions[1].subMerchantPrice, 42)
  t.is(result.paymentTransactions[1].subMerchantPayoutRate, 84)
  t.is(result.paymentTransactions[1].subMerchantPayoutAmount, 29.7)
  t.is(result.paymentTransactions[1].pfCommissionRateAmount, 0)
});

test('should search payments', async t => {
  const scope = nock('http://localhost:8000')
  .get('/payment-reporting/v1/payments?page=0&size=10&paymentStatus=SUCCESS')
  .reply(200, {
    data: {
      id: 1,
      createdDate: '2020-09-11T10:00:00',
      price: 100.0,
      paidPrice: 100.0,
      walletPrice: 0.0,
      buyerId: 1,
      currency: 'TRY',
      installment: 1,
      conversationId: 'd1811bb0-25a2-40c7-ba71-c8b605259611',
      paymentStatus: 'SUCCESS',
      merchantCommissionRate: 10,
      merchantCommissionRateAmount: 0.1,
      binNumber: 424242,
      lastFourDigits: 4242,
      cardType: 'CREDIT_CARD',
      cardAssociation: 'MASTER_CARD',
      cardBrand: 'World',
      paymentTransactions: [
        {
          id: 1,
          externalId: 'fcf47134-12ee-4d37-bd2c-c46cd9297487',
          name: 'Pharmaton',
          transactionStatus: 'APPROVED',
          blockageResolvedDate: '2021-02-21T15:00:00',
          price: 30,
          paidPrice: 33,
          walletPrice: 0,
          merchantCommissionRate: 10,
          merchantCommissionRateAmount: 3,
          merchantPayoutAmount: 2.97,
          subMerchantId: 1,
          subMerchantPrice: 27,
          subMerchantPayoutRate: 90,
          subMerchantPayoutAmount: 29.7,
          pfCommissionRateAmount: 0,
          convertedPayout: {
            paidPrice: 33,
            currency: 'TRY',
            merchantPayoutAmount: 2.97,
            subMerchantPayoutAmount: 29.7,
            pfCommissionRateAmount: 0,
            pfConversionRateAmount: 0
          }
        },
        {
          id: 2,
          externalId: 'a5eb1ab1-2676-4c10-830d-cc204e0f2126',
          name: 'Supradyn',
          price: 50,
          paidPrice: 55,
          transactionStatus: 'APPROVED',
          blockageResolvedDate: '2021-02-21T15:00:00',
          walletPrice: 0,
          merchantCommissionRate: 10,
          merchantCommissionRateAmount: 5,
          merchantPayoutAmount: 8.25,
          subMerchantId: 2,
          subMerchantPrice: 42,
          subMerchantPayoutRate: 84,
          subMerchantPayoutAmount: 29.7,
          pfCommissionRateAmount: 0,
          convertedPayout: {
            paidPrice: 33,
            currency: 'TRY',
            merchantPayoutAmount: 2.97,
            subMerchantPayoutAmount: 29.7,
            pfCommissionRateAmount: 0,
            pfConversionRateAmount: 0
          }
        }
      ]
    },
  })

  const request = {
    page: 0,
    size: 10,
    paymentStatus: 'SUCCESS'
  };

  const result = await paymentAdapter.searchPayments(request)
  t.is(result.id, 1)
  t.is(result.price, 100)
  t.is(result.paidPrice, 100)
  t.is(result.buyerId, 1)
  t.is(result.currency, TokenPay.Model.Currency.TRY)
  t.is(result.installment, 1)
  t.is(result.conversationId, 'd1811bb0-25a2-40c7-ba71-c8b605259611')
  t.is(result.paymentStatus, TokenPay.Model.PaymentStatus.Success)
  t.is(result.merchantCommissionRate, 10)
  t.is(result.merchantCommissionRateAmount, 0.1)
  t.is(result.binNumber, 424242)
  t.is(result.lastFourDigits, 4242)
  t.is(result.cardType, 'CREDIT_CARD')
  t.is(result.cardAssociation, 'MASTER_CARD')
  t.is(result.cardBrand, 'World')
  t.is(result.paymentTransactions[0].id, 1)
  t.is(result.paymentTransactions[0].externalId, 'fcf47134-12ee-4d37-bd2c-c46cd9297487')
  t.is(result.paymentTransactions[0].name, 'Pharmaton')
  t.is(result.paymentTransactions[0].transactionStatus, TokenPay.Model.TransactionStatus.Approved)
  t.is(result.paymentTransactions[0].blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.paymentTransactions[0].price, 30)
  t.is(result.paymentTransactions[0].paidPrice, 33)
  t.is(result.paymentTransactions[0].walletPrice, 0)
  t.is(result.paymentTransactions[0].merchantCommissionRate, 10)
  t.is(result.paymentTransactions[0].merchantCommissionRateAmount, 3)
  t.is(result.paymentTransactions[0].merchantPayoutAmount, 2.97)
  t.is(result.paymentTransactions[0].subMerchantId, 1)
  t.is(result.paymentTransactions[0].subMerchantPrice, 27)
  t.is(result.paymentTransactions[0].subMerchantPayoutRate, 90)
  t.is(result.paymentTransactions[0].subMerchantPayoutAmount, 29.7)
  t.is(result.paymentTransactions[0].pfCommissionRateAmount, 0)

  t.is(result.paymentTransactions[1].id, 2)
  t.is(result.paymentTransactions[1].externalId, 'a5eb1ab1-2676-4c10-830d-cc204e0f2126')
  t.is(result.paymentTransactions[1].name, 'Supradyn')
  t.is(result.paymentTransactions[1].transactionStatus, TokenPay.Model.TransactionStatus.Approved)
  t.is(result.paymentTransactions[1].blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.paymentTransactions[1].price, 50)
  t.is(result.paymentTransactions[1].paidPrice, 55)
  t.is(result.paymentTransactions[1].walletPrice, 0)
  t.is(result.paymentTransactions[1].merchantCommissionRate, 10)
  t.is(result.paymentTransactions[1].merchantCommissionRateAmount, 5)
  t.is(result.paymentTransactions[1].merchantPayoutAmount, 8.25)
  t.is(result.paymentTransactions[1].subMerchantId, 2)
  t.is(result.paymentTransactions[1].subMerchantPrice, 42)
  t.is(result.paymentTransactions[1].subMerchantPayoutRate, 84)
  t.is(result.paymentTransactions[1].subMerchantPayoutAmount, 29.7)
  t.is(result.paymentTransactions[1].pfCommissionRateAmount, 0)
});

test('should approve payment tx', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/payment-transactions/approve')
  .reply(200, {
    data: {
      items: [
        {
          paymentTransactionId: 100,
          approvalStatus: 'APPROVED',
          failedReason: ''
        },
        {
          paymentTransactionId: 101,
          approvalStatus: 'FAILURE',
          failedReason: 'already approved'
        }
      ]
    }
  });

  const request = {
    paymentTransactionIds: [100,101],
    isTransactional: false
  };

  const result = await paymentAdapter.approvePaymentTransactions(request)
  t.is(result.items[0].paymentTransactionId, 100)
  t.is(result.items[0].approvalStatus, 'APPROVED')
  t.is(result.items[0].failedReason, '')
  t.is(result.items[1].paymentTransactionId, 101)
  t.is(result.items[1].approvalStatus, 'FAILURE')
  t.is(result.items[1].failedReason, 'already approved')
});

test('should disapprove payment tx', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/payment-transactions/disapprove')
  .reply(200, {
    data: {
      items: [
        {
          paymentTransactionId: 100,
          approvalStatus: 'APPROVED',
          failedReason: ''
        },
        {
          paymentTransactionId: 101,
          approvalStatus: 'FAILURE',
          failedReason: 'already disapproved'
        }
      ]
    }
  });

  const request = {
    paymentTransactionIds: [100,101],
    isTransactional: false
  };

  const result = await paymentAdapter.disapprovePaymentTransactions(request)
  t.is(result.items[0].paymentTransactionId, 100)
  t.is(result.items[0].approvalStatus, 'APPROVED')
  t.is(result.items[0].failedReason, '')
  t.is(result.items[1].paymentTransactionId, 101)
  t.is(result.items[1].approvalStatus, 'FAILURE')
  t.is(result.items[1].failedReason, 'already disapproved')
});

test('should init 3ds payment', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/card-payments/3ds-init')
  .reply(200, {
    data: {
      htmlContent: 'PGh0bWw+M2RzZWN1cmUgaHRtbDwvaHRtbD4='
    }
  });

  const request = {
    price: 100.0,
    paidPrice: 100.0,
    walletPrice: 0.0,
    installment: 1,
    conversationId: 'foo-bar',
    currency: 'TRY',
    paymentGroup: 'Product',
    card: {
      cardHolderName: 'Ahmet Mehmet',
      cardNumber: '5406670000000009',
      expireYear: '2044',
      expireMonth: '11',
      cvc: '123'
    },
    items: [
      {
        name: 'Pharmaton',
        price: 30.0,
        subMerchantId: 1,
        subMerchantPrice: 27.0
      },
      {
        name: 'Supradyn',
        price: 50.0,
        subMerchantId: 1,
        subMerchantPrice: 42.0
      }
    ]
  };

  const result = await paymentAdapter.init3DSPayment(request)
  t.is(result.htmlContent, 'PGh0bWw+M2RzZWN1cmUgaHRtbDwvaHRtbD4=')
});

test('should complete three ds', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/card-payments/3ds-complete')
  .reply(200, {
    data: {
      id: 1,
      createdDate: '2020-09-11T10:00:00',
      price: 100.0,
      paidPrice: 100.0,
      walletPrice: 0.0,
      buyerId: 1,
      currency: 'TRY',
      installment: 1,
      conversationId: 'd1811bb0-25a2-40c7-ba71-c8b605259611',
      paymentStatus: 'SUCCESS',
      merchantCommissionRate: 10,
      merchantCommissionRateAmount: 0.1,
      binNumber: 424242,
      lastFourDigits: 4242,
      cardType: 'CREDIT_CARD',
      cardAssociation: 'MASTER_CARD',
      cardBrand: 'World',
      paymentTransactions: [
        {
          id: 1,
          externalId: 'fcf47134-12ee-4d37-bd2c-c46cd9297487',
          name: 'Pharmaton',
          transactionStatus: 'APPROVED',
          blockageResolvedDate: '2021-02-21T15:00:00',
          price: 30,
          paidPrice: 33,
          walletPrice: 0,
          merchantCommissionRate: 10,
          merchantCommissionRateAmount: 3,
          merchantPayoutAmount: 2.97,
          subMerchantId: 1,
          subMerchantPrice: 27,
          subMerchantPayoutRate: 90,
          subMerchantPayoutAmount: 29.7,
          pfCommissionRateAmount: 0,
          convertedPayout: {
            paidPrice: 33,
            currency: 'TRY',
            merchantPayoutAmount: 2.97,
            subMerchantPayoutAmount: 29.7,
            pfCommissionRateAmount: 0,
            pfConversionRateAmount: 0
          }
        },
        {
          id: 2,
          externalId: 'a5eb1ab1-2676-4c10-830d-cc204e0f2126',
          name: 'Supradyn',
          price: 50,
          paidPrice: 55,
          transactionStatus: 'APPROVED',
          blockageResolvedDate: '2021-02-21T15:00:00',
          walletPrice: 0,
          merchantCommissionRate: 10,
          merchantCommissionRateAmount: 5,
          merchantPayoutAmount: 8.25,
          subMerchantId: 2,
          subMerchantPrice: 42,
          subMerchantPayoutRate: 84,
          subMerchantPayoutAmount: 29.7,
          pfCommissionRateAmount: 0,
          convertedPayout: {
            paidPrice: 33,
            currency: 'TRY',
            merchantPayoutAmount: 2.97,
            subMerchantPayoutAmount: 29.7,
            pfCommissionRateAmount: 0,
            pfConversionRateAmount: 0
          }
        }
      ]
    },
  })

  const request = {
    paymentId: 1
  };

  const result = await paymentAdapter.complete3DSPayment(request)
  t.is(result.id, 1)
  t.is(result.price, 100)
  t.is(result.paidPrice, 100)
  t.is(result.buyerId, 1)
  t.is(result.currency, 'TRY')
  t.is(result.installment, 1)
  t.is(result.conversationId, 'd1811bb0-25a2-40c7-ba71-c8b605259611')
  t.is(result.paymentStatus, 'SUCCESS')
  t.is(result.merchantCommissionRate, 10)
  t.is(result.merchantCommissionRateAmount, 0.1)
  t.is(result.binNumber, 424242)
  t.is(result.lastFourDigits, 4242)
  t.is(result.cardType, 'CREDIT_CARD')
  t.is(result.cardAssociation, 'MASTER_CARD')
  t.is(result.cardBrand, 'World')
  t.is(result.paymentTransactions[0].id, 1)
  t.is(result.paymentTransactions[0].externalId, 'fcf47134-12ee-4d37-bd2c-c46cd9297487')
  t.is(result.paymentTransactions[0].name, 'Pharmaton')
  t.is(result.paymentTransactions[0].transactionStatus, 'APPROVED')
  t.is(result.paymentTransactions[0].blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.paymentTransactions[0].price, 30)
  t.is(result.paymentTransactions[0].paidPrice, 33)
  t.is(result.paymentTransactions[0].walletPrice, 0)
  t.is(result.paymentTransactions[0].merchantCommissionRate, 10)
  t.is(result.paymentTransactions[0].merchantCommissionRateAmount, 3)
  t.is(result.paymentTransactions[0].merchantPayoutAmount, 2.97)
  t.is(result.paymentTransactions[0].subMerchantId, 1)
  t.is(result.paymentTransactions[0].subMerchantPrice, 27)
  t.is(result.paymentTransactions[0].subMerchantPayoutRate, 90)
  t.is(result.paymentTransactions[0].subMerchantPayoutAmount, 29.7)
  t.is(result.paymentTransactions[0].pfCommissionRateAmount, 0)

  t.is(result.paymentTransactions[1].id, 2)
  t.is(result.paymentTransactions[1].externalId, 'a5eb1ab1-2676-4c10-830d-cc204e0f2126')
  t.is(result.paymentTransactions[1].name, 'Supradyn')
  t.is(result.paymentTransactions[1].transactionStatus, 'APPROVED')
  t.is(result.paymentTransactions[1].blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.paymentTransactions[1].price, 50)
  t.is(result.paymentTransactions[1].paidPrice, 55)
  t.is(result.paymentTransactions[1].walletPrice, 0)
  t.is(result.paymentTransactions[1].merchantCommissionRate, 10)
  t.is(result.paymentTransactions[1].merchantCommissionRateAmount, 5)
  t.is(result.paymentTransactions[1].merchantPayoutAmount, 8.25)
  t.is(result.paymentTransactions[1].subMerchantId, 2)
  t.is(result.paymentTransactions[1].subMerchantPrice, 42)
  t.is(result.paymentTransactions[1].subMerchantPayoutRate, 84)
  t.is(result.paymentTransactions[1].subMerchantPayoutAmount, 29.7)
  t.is(result.paymentTransactions[1].pfCommissionRateAmount, 0)
});

test('should refund payment tx', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/refund-transactions')
  .reply(200, {
    data: {
      id: 1,
      conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
      createdDate: '2044-07-07T00:00:00',
      status: 'SUCCESS',
      isAfterSettlement: false,
      refundPrice: 20,
      refundBankPrice: 20,
      refundWalletPrice: 0,
      currency: 'TRY',
      paymentTransactionId: 1,
      paymentId: 1,
      refundDestinationType: 'CARD'
    }
  })

  const request = {
    paymentTransactionId: 1,
    conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
    refundPrice: 20,
    refundDestinationType: 'CARD'
  };

  const result = await paymentAdapter.refundPaymentTransaction(request)
  t.is(result.id, 1)
  t.is(result.conversationId, '9d43edb0-f141-4f14-8e99-57126f941fde')
  t.is(result.status, 'SUCCESS')
  t.is(result.isAfterSettlement, false)
  t.is(result.currency, 'TRY')
  t.is(result.refundPrice, 20)
  t.is(result.refundBankPrice, 20)
  t.is(result.refundWalletPrice, 0)
  t.is(result.paymentTransactionId, 1)
  t.is(result.paymentId, 1)
  t.is(result.refundDestinationType, 'CARD')
});

test('should retrieve refund tx', async t => {
  const scope = nock('http://localhost:8000')
  .get('/payment/v1/refund-transactions/1')
  .reply(200, {
    data: {
      id: 1,
      conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
      createdDate: '2044-07-07T00:00:00',
      status: 'SUCCESS',
      isAfterSettlement: false,
      refundPrice: 20,
      refundBankPrice: 20,
      refundWalletPrice: 0,
      currency: 'TRY',
      paymentTransactionId: 1,
      paymentId: 1,
      refundDestinationType: 'CARD'
    }
  })

  const result = await paymentAdapter.retrievePaymentTransactionRefund(1)
  t.is(result.id, 1)
  t.is(result.conversationId, '9d43edb0-f141-4f14-8e99-57126f941fde')
  t.is(result.status, 'SUCCESS')
  t.is(result.isAfterSettlement, false)
  t.is(result.currency, 'TRY')
  t.is(result.refundPrice, 20)
  t.is(result.refundBankPrice, 20)
  t.is(result.refundWalletPrice, 0)
  t.is(result.paymentTransactionId, 1)
  t.is(result.paymentId, 1)
  t.is(result.refundDestinationType, 'CARD')
});

test('should search refund tx', async t => {
  const scope = nock('http://localhost:8000')
  .get('/payment/v1/refund-transactions?paymentId=1')
  .reply(200, {
    data: {
      items: [
        {
          id: 1,
          conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
          createdDate: '2044-07-07T00:00:00',
          status: 'SUCCESS',
          isAfterSettlement: false,
          refundPrice: 20,
          refundBankPrice: 20,
          refundWalletPrice: 0,
          currency: 'TRY',
          paymentTransactionId: 1,
          paymentId: 1,
          refundDestinationType: 'CARD'
        }
      ]
    }
  })

  const request = {
    paymentId: 1
  }

  const result = await paymentAdapter.searchPaymentTransactionRefunds(request)
  t.is(result.items[0].id, 1)
  t.is(result.items[0].conversationId, '9d43edb0-f141-4f14-8e99-57126f941fde')
  t.is(result.items[0].status, 'SUCCESS')
  t.is(result.items[0].isAfterSettlement, false)
  t.is(result.items[0].currency, 'TRY')
  t.is(result.items[0].refundPrice, 20)
  t.is(result.items[0].refundBankPrice, 20)
  t.is(result.items[0].refundWalletPrice, 0)
  t.is(result.items[0].paymentTransactionId, 1)
  t.is(result.items[0].paymentId, 1)
  t.is(result.items[0].refundDestinationType, 'CARD')
});

test('should refund payment', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/refunds')
  .reply(200, {
    data: {
      items: [
        {
          id: 1,
          conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
          createdDate: '2044-07-07T00:00:00',
          status: 'SUCCESS',
          refundPrice: 20,
          refundBankPrice: 20,
          refundWalletPrice: 0,
          currency: 'TRY',
          paymentTransactionId: 1,
          paymentId: 1,
          refundType: 'REFUND'
        }
      ]
    }
  })

  const request = {
    paymentId: 1
  }

  const result = await paymentAdapter.refundPayment(request)
  t.is(result.items[0].id, 1)
  t.is(result.items[0].conversationId, '9d43edb0-f141-4f14-8e99-57126f941fde')
  t.is(result.items[0].status, 'SUCCESS')
  t.is(result.items[0].currency, 'TRY')
  t.is(result.items[0].refundPrice, 20)
  t.is(result.items[0].refundBankPrice, 20)
  t.is(result.items[0].refundWalletPrice, 0)
  t.is(result.items[0].paymentTransactionId, 1)
  t.is(result.items[0].paymentId, 1)
  t.is(result.items[0].refundType, 'REFUND')
});

test('should retrieve refund', async t => {
  const scope = nock('http://localhost:8000')
  .get('/payment/v1/refunds/1')
  .reply(200, {
    data: {
        id: 1,
        conversationId: '9d43edb0-f141-4f14-8e99-57126f941fde',
        createdDate: '2044-07-07T00:00:00',
        status: 'SUCCESS',
        refundPrice: 20,
        refundBankPrice: 20,
        refundWalletPrice: 0,
        currency: 'TRY',
        paymentTransactionId: 1,
        paymentId: 1,
        refundType: 'REFUND'
    }
  })

  const result = await paymentAdapter.retrievePaymentRefund(1)
  t.is(result.id, 1)
  t.is(result.conversationId, '9d43edb0-f141-4f14-8e99-57126f941fde')
  t.is(result.status, 'SUCCESS')
  t.is(result.currency, 'TRY')
  t.is(result.refundPrice, 20)
  t.is(result.refundBankPrice, 20)
  t.is(result.refundWalletPrice, 0)
  t.is(result.paymentTransactionId, 1)
  t.is(result.paymentId, 1)
  t.is(result.refundType, 'REFUND')
});

test('should send crossbooking', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/cross-bookings/send')
  .reply(200, {
    data: {
        id: 1,
        price: 100,
        createdDate: '2044-07-07T00:00:00',
        status: 'SUCCESS',
        transactionStatus: 'WAITING_FOR_PAYOUT'
    }
  })

  const request = {
    reason: 'SEND MONEY',
    price: 100,
    currency: 'TRY',
    subMerchantId: 1
  }

  const result = await paymentAdapter.sendMoney(request)
  t.is(result.id, 1)
  t.is(result.price, 100)
  t.is(result.transactionStatus, 'WAITING_FOR_PAYOUT')
});

test('should receive crossbooking', async t => {
  const scope = nock('http://localhost:8000')
  .post('/payment/v1/cross-bookings/receive')
  .reply(200, {
    data: {
        id: 1,
        price: 100,
        createdDate: '2044-07-07T00:00:00',
        status: 'SUCCESS',
        transactionStatus: 'WAITING_FOR_PAYOUT'
    }
  })

  const request = {
    reason: 'RECEIVE MONEY',
    price: 100,
    currency: 'TRY',
    subMerchantId: 1
  }

  const result = await paymentAdapter.receiveMoney(request)
  t.is(result.id, 1)
  t.is(result.price, 100)
  t.is(result.transactionStatus, 'WAITING_FOR_PAYOUT')
});

test('should delete stored card', async t => {
  const request = {
    merchantId: 100,
    cardUserKey: 'de050909-39a9-473c-a81a-f186dd55cfef',
    cardToken: 'f13129c4-55b2-4055-8c94-60c0d8c51a3b'
  };

  const queryString = [
    `merchantId=${request.merchantId}`,
    `cardUserKey=${request.cardUserKey}`,
    `cardToken=${request.cardToken}`
  ].join('&');

  const scope = nock('http://localhost:8000')
  .delete(`/payment/v1/cards?${queryString}`)
  .reply(204);

  await paymentAdapter.deleteStoredCard(request)
  t.is(1,1)
});

test('should search stored cards', async t => {
  const scope = nock('http://localhost:8000')
  .get('/payment/v1/cards?page=0&size=10&cardAssociation=MASTER_CARD')
  .reply(200, {
    data: {
      items: [
        {
          id: 1,
          cardUserKey: 'de050909-39a9-473c-a81a-f186dd55cfef',
          cardToken: 'f13129c4-55b2-4055-8c94-60c0d8c51a3b',
          binNumber: '402277',
          lastFourDigits: '4026',
          expireYear: '2030',
          expireMonth: '10',
          cardHolderName: 'Berkay Dincer',
          cardAlias: 'test card',
          cardType: 'CREDIT_CARD',
          cardAssociation: 'MASTER_CARD',
          cardBrand: 'İşbank Maximum Card',
          cardBankName: 'İşbank'
        },
        {
          id: 2,
          cardUserKey: 'ee050909-39a9-473c-a81a-f186dd55cfed',
          cardToken: 'fa3129c4-55b2-4055-8c94-60c0d8c51a3e',
          binNumber: '402276',
          lastFourDigits: '4025',
          expireYear: '2029',
          expireMonth: '09',
          cardHolderName: 'Berkay Dincer 2',
          cardAlias: 'test card 2',
          cardType: 'CREDIT_CARD',
          cardAssociation: 'MASTER_CARD',
          cardBrand: 'İşbank Maximum Card',
          cardBankName: 'İşbank'
        }
      ]
    }
  });

  const request = {
    page: 0,
    size: 10,
    cardAssociation: 'MASTER_CARD'
  };

  const result = await paymentAdapter.searchStoredCards(request)
  t.is(result.items[0].id, 1)
  t.is(result.items[0].cardUserKey,'de050909-39a9-473c-a81a-f186dd55cfef')
  t.is(result.items[0].cardToken, 'f13129c4-55b2-4055-8c94-60c0d8c51a3b')
  t.is(result.items[0].binNumber, '402277')
  t.is(result.items[0].lastFourDigits, '4026')
  t.is(result.items[0].expireYear, '2030')
  t.is(result.items[0].expireMonth, '10')
  t.is(result.items[0].cardHolderName,'Berkay Dincer')
  t.is(result.items[0].cardAlias,'test card')
  t.is(result.items[0].cardType,'CREDIT_CARD')
  t.is(result.items[0].cardAssociation,'MASTER_CARD')
  t.is(result.items[0].cardBrand,'İşbank Maximum Card')
  t.is(result.items[0].cardBankName,'İşbank')

  t.is(result.items[1].id, 2)
  t.is(result.items[1].cardUserKey,'ee050909-39a9-473c-a81a-f186dd55cfed')
  t.is(result.items[1].cardToken, 'fa3129c4-55b2-4055-8c94-60c0d8c51a3e')
  t.is(result.items[1].binNumber, '402276')
  t.is(result.items[1].lastFourDigits, '4025')
  t.is(result.items[1].expireYear, '2029')
  t.is(result.items[1].expireMonth, '09')
  t.is(result.items[1].cardHolderName,'Berkay Dincer 2')
  t.is(result.items[1].cardAlias,'test card 2')
  t.is(result.items[1].cardType,'CREDIT_CARD')
  t.is(result.items[1].cardAssociation,'MASTER_CARD')
  t.is(result.items[1].cardBrand,'İşbank Maximum Card')
  t.is(result.items[1].cardBankName,'İşbank')
});
