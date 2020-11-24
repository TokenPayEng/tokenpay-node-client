const test = require('ava');
const nock = require('nock');

const TokenPay = require('../../dist');

const onboardingAdapter = new TokenPay.Adapter.OnboardingAdapter({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

test('createSubMerchant() should create sub merchant', async t => {
  const request = {
    subMerchantType: TokenPay.Model.SubMerchantType.Personal,
    subMerchantExternalId: 'wormie',
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    gsmNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    identityNumber: '12341234912',
    legalCompanyTitle: 'Skywalker Aviation'
  };

  const response = {
    id: 42,
    status: 'ACTIVE',
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    gsmNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    identityNumber: '12341234912',
    legalCompanyTitle: 'Skywalker Aviation',
    subMerchantType: 'PERSONAL',
    subMerchantExternalId: 'wormie'
  };

  nock('http://localhost:8000')
    .post('/onboarding/v1/sub-merchants', request)
    .reply(200, {data: response});

  const result = await onboardingAdapter.createSubMerchant(request);
  t.is(result.id, 42);
  t.is(result.status, TokenPay.Model.Status.Active);
  t.is(result.name, 'Luke Skywalker');
  t.is(result.address, 'Tatooine');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.gsmNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.identityNumber, '12341234912');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
  t.is(result.subMerchantType, TokenPay.Model.SubMerchantType.Personal);
  t.is(result.subMerchantExternalId, 'wormie');
});

test('updateSubMerchant() should update sub merchant', async t => {
  const request = {
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    gsmNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    identityNumber: '12341234912',
    legalCompanyTitle: 'Skywalker Aviation'
  };

  const response = {
    id: 42,
    status: 'ACTIVE',
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    gsmNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    identityNumber: '12341234912',
    legalCompanyTitle: 'Skywalker Aviation',
    subMerchantType: 'PERSONAL',
    subMerchantExternalId: 'wormie'
  };

  nock('http://localhost:8000')
    .put('/onboarding/v1/sub-merchants/42', request)
    .reply(200, {data: response});

  const result = await onboardingAdapter.updateSubMerchant(42, request);
  t.is(result.id, 42);
  t.is(result.status, TokenPay.Model.Status.Active);
  t.is(result.name, 'Luke Skywalker');
  t.is(result.address, 'Tatooine');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.gsmNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.identityNumber, '12341234912');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
  t.is(result.subMerchantType, TokenPay.Model.SubMerchantType.Personal);
  t.is(result.subMerchantExternalId, 'wormie');
});

test('retrieveSubMerchant() should update sub merchant', async t => {
  const response = {
    id: 42,
    status: 'ACTIVE',
    name: 'Luke Skywalker',
    address: 'Tatooine',
    email: 'luke@skywalker.com',
    iban: 'TR320010009999901234567890',
    gsmNumber: '+905551234567',
    taxOffice: 'Tatooine',
    taxNumber: '1234123456',
    contactName: 'Luke',
    contactSurname: 'Skywalker',
    identityNumber: '12341234912',
    legalCompanyTitle: 'Skywalker Aviation',
    subMerchantType: 'PERSONAL',
    subMerchantExternalId: 'wormie'
  };

  nock('http://localhost:8000')
    .get(`/onboarding/v1/sub-merchants/${response.id}`)
    .reply(200, {data: response});

  const result = await onboardingAdapter.retrieveSubMerchant(response.id);
  t.is(result.id, 42);
  t.is(result.status, TokenPay.Model.Status.Active);
  t.is(result.name, 'Luke Skywalker');
  t.is(result.address, 'Tatooine');
  t.is(result.email, 'luke@skywalker.com');
  t.is(result.iban, 'TR320010009999901234567890');
  t.is(result.gsmNumber, '+905551234567');
  t.is(result.taxOffice, 'Tatooine');
  t.is(result.taxNumber, '1234123456');
  t.is(result.contactName, 'Luke');
  t.is(result.contactSurname, 'Skywalker');
  t.is(result.identityNumber, '12341234912');
  t.is(result.legalCompanyTitle, 'Skywalker Aviation');
  t.is(result.subMerchantType, TokenPay.Model.SubMerchantType.Personal);
  t.is(result.subMerchantExternalId, 'wormie');
});

test('searchSubMerchants() should search for sub merchants', async t => {
  const request = {
    name: 'luke',
    subMerchantIds: [1, 2, 42],
    subMerchantExternalId: 'wormie',
    subMerchantType: TokenPay.Model.SubMerchantType.Personal,
    page: 0,
    size: 25
  };

  const queryString = [
    'name=luke',
    'subMerchantIds=1',
    'subMerchantIds=2',
    'subMerchantIds=42',
    'subMerchantExternalId=wormie',
    'subMerchantType=PERSONAL',
    'page=0',
    'size=25'
  ].join('&');

  const response = {
    page: 0,
    size: 25,
    totalSize: 1,
    items: [
      {
        id: 42,
        status: 'ACTIVE',
        name: 'Luke Skywalker',
        address: 'Tatooine',
        email: 'luke@skywalker.com',
        iban: 'TR320010009999901234567890',
        gsmNumber: '+905551234567',
        taxOffice: 'Tatooine',
        taxNumber: '1234123456',
        contactName: 'Luke',
        contactSurname: 'Skywalker',
        identityNumber: '12341234912',
        legalCompanyTitle: 'Skywalker Aviation',
        subMerchantType: 'PERSONAL',
        subMerchantExternalId: 'wormie'
      }
    ]
  };

  nock('http://localhost:8000')
    .get(`/onboarding/v1/sub-merchants?${queryString}`)
    .reply(200, {data: response});

  const {page, size, totalSize, items} = await onboardingAdapter.searchSubMerchants(request);
  t.is(page, 0);
  t.is(size, 25);
  t.is(totalSize, 1);
  t.is(items.length, 1);
  t.is(items[0].id, 42);
  t.is(items[0].status, TokenPay.Model.Status.Active);
  t.is(items[0].name, 'Luke Skywalker');
  t.is(items[0].address, 'Tatooine');
  t.is(items[0].email, 'luke@skywalker.com');
  t.is(items[0].iban, 'TR320010009999901234567890');
  t.is(items[0].gsmNumber, '+905551234567');
  t.is(items[0].taxOffice, 'Tatooine');
  t.is(items[0].taxNumber, '1234123456');
  t.is(items[0].contactName, 'Luke');
  t.is(items[0].contactSurname, 'Skywalker');
  t.is(items[0].identityNumber, '12341234912');
  t.is(items[0].legalCompanyTitle, 'Skywalker Aviation');
  t.is(items[0].subMerchantType, TokenPay.Model.SubMerchantType.Personal);
  t.is(items[0].subMerchantExternalId, 'wormie');
});

test('createBuyer() should create buyer', async t => {
  const request = {
    email: 'obiwan@kenobi.com',
    name: 'Obi Wan',
    surname: 'Kenobi',
    gsmNumber: '+905559876543',
    tckn: '98769876543',
    buyerExternalId: 'uncle-ben'
  };

  const response = {
    id: 81,
    status: 'ACTIVE',
    email: 'obiwan@kenobi.com',
    name: 'Obi Wan',
    surname: 'Kenobi',
    gsmNumber: '+905559876543',
    tckn: '98769876543',
    buyerExternalId: 'uncle-ben'
  };

  nock('http://localhost:8000')
    .post('/onboarding/v1/buyers', request)
    .reply(200, {data: response});

  const result = await onboardingAdapter.createBuyer(request);
  t.is(result.id, 81);
  t.is(result.status, TokenPay.Model.Status.Active);
  t.is(result.email, 'obiwan@kenobi.com');
  t.is(result.name, 'Obi Wan');
  t.is(result.surname, 'Kenobi');
  t.is(result.gsmNumber, '+905559876543');
  t.is(result.tckn, '98769876543');
  t.is(result.buyerExternalId, 'uncle-ben');
});

test('updateBuyer() should create buyer', async t => {
  const request = {
    email: 'obiwan@kenobi.com',
    name: 'Obi Wan',
    surname: 'Kenobi',
    gsmNumber: '+905559876543',
    tckn: '98769876543'
  };

  const response = {
    id: 81,
    status: 'ACTIVE',
    email: 'obiwan@kenobi.com',
    name: 'Obi Wan',
    surname: 'Kenobi',
    gsmNumber: '+905559876543',
    tckn: '98769876543',
    buyerExternalId: 'uncle-ben'
  };

  nock('http://localhost:8000')
    .put(`/onboarding/v1/buyers/${response.id}`, request)
    .reply(200, {data: response});

  const result = await onboardingAdapter.updateBuyer(response.id, request);
  t.is(result.id, 81);
  t.is(result.status, TokenPay.Model.Status.Active);
  t.is(result.email, 'obiwan@kenobi.com');
  t.is(result.name, 'Obi Wan');
  t.is(result.surname, 'Kenobi');
  t.is(result.gsmNumber, '+905559876543');
  t.is(result.tckn, '98769876543');
  t.is(result.buyerExternalId, 'uncle-ben');
});

test('retrieveBuyer() should retrieve buyer', async t => {
  const response = {
    id: 81,
    status: 'ACTIVE',
    email: 'obiwan@kenobi.com',
    name: 'Obi Wan',
    surname: 'Kenobi',
    gsmNumber: '+905559876543',
    tckn: '98769876543',
    buyerExternalId: 'uncle-ben'
  };

  nock('http://localhost:8000')
    .get(`/onboarding/v1/buyers/${response.id}`)
    .reply(200, {data: response});

  const result = await onboardingAdapter.retrieveBuyer(response.id);
  t.is(result.id, 81);
  t.is(result.status, TokenPay.Model.Status.Active);
  t.is(result.email, 'obiwan@kenobi.com');
  t.is(result.name, 'Obi Wan');
  t.is(result.surname, 'Kenobi');
  t.is(result.gsmNumber, '+905559876543');
  t.is(result.tckn, '98769876543');
  t.is(result.buyerExternalId, 'uncle-ben');
});
