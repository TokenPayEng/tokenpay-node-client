const test = require('ava');

const TokenPay = require('../dist');

test('installment() should return the installment adapter', t => {
  const options = {
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'http://localhost:8000'
  };

  const tokenPay = new TokenPay.Client(options);
  const installmentAdapter = tokenPay.installment();

  t.truthy(installmentAdapter);
  t.true(installmentAdapter instanceof TokenPay.Adapter.InstallmentAdapter);
});

test('onboarding() should return the onboarding adapter', t => {
  const options = {
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'http://localhost:8000'
  };

  const tokenPay = new TokenPay.Client(options);
  const onboardingAdapter = tokenPay.onboarding();

  t.truthy(onboardingAdapter);
  t.true(onboardingAdapter instanceof TokenPay.Adapter.OnboardingAdapter);
});

test('payment() should return the payment adapter', t => {
  const options = {
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'http://localhost:8000'
  };

  const tokenPay = new TokenPay.Client(options);
  const paymentAdapter = tokenPay.payment();

  t.truthy(paymentAdapter);
  t.true(paymentAdapter instanceof TokenPay.Adapter.PaymentAdapter);
});

test('settlementReporting() should return the settlement reporting adapter', t => {
  const options = {
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'http://localhost:8000'
  };

  const tokenPay = new TokenPay.Client(options);
  const settlementReportingAdapter = tokenPay.settlementReporting();

  t.truthy(settlementReportingAdapter);
  t.true(settlementReportingAdapter instanceof TokenPay.Adapter.SettlementReportingAdapter);
});
