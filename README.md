# TokenPay Node.js Client
This repo contains the Node.js client for TokenPay API.

## Requirements
- Node.js v4.x+
  - If you plan on using this library with older versions of Node (e.g. v0.10.x), you'll only need to include a `Promise` polyfill such as [bluebird](https://github.com/petkaantonov/bluebird)

## Installation
```bash
$ npm install @tokenpayeng/tokenpay
```

## Usage
To access the TokenPay API you'll first need to obtain API credentials (e.g. an API key and a secret key). If you don't already have a TokenPay account, you can signup at [https://tokenpay.com.tr/](https://tokenpay.com.tr)

Once you've obtained your API credentials, you can start using TokenPay by instantiating a `TokenPayClient` with your credentials.

```js
const TokenPay = require('@tokenpayeng/tokenpay');

const tokenPay = new TokenPay.Client({
  apiKey: '<YOUR API KEY>',
  secretKey: '<YOUR SECRET KEY>'
});

...
```

By default the TokenPay client connects to the production API servers at `https://api-gateway.tokenpay.com.tr`. For testing purposes, please use the sandbox URL `https://sandbox-api-gateway.tokenpay.com.tr` using the .

```js
const TokenPay = require('@tokenpayeng/tokenpay');

const tokenPay = new TokenPay.Client({
  apiKey: '<YOUR API KEY>',
  secretKey: '<YOUR SECRET KEY>',
  baseUrl: 'https://sandbox-api-gateway.tokenpay.com.tr'
});

...
```

### Bulk Import vs. Individual Imports
The root export of the project (e.g. `@tokenpayeng/tokenpay`) is designed primarily for CommonJS-style bulk imports, but the project also exports its modules individually, so you can also import them directly in ES6 fashion. On development environments where a transpiler such as Babel or TypeScript exists, we recommend using this approach.

Keep in mind that when using direct imports, you'll have to import necessary modules individually. So this code:

```js
const TokenPay = require('@tokenpayeng/tokenpay');

const tokenPay = new TokenPay.Client({...});
tokenPay.payment().createPayment({
  ...,
  currency: TokenPay.Model.Currency.EUR,
  ...
})
...
```

becomes like this:

```js
import TokenPayClient from '@tokenpayeng/tokenpay/TokenPayClient';
import Currency from '@tokenpayeng/tokenpay/model/Currency';

const tokenPay = new TokenPayClient({...});
tokenPay.payment().createPayment({
  ...,
  currency: Currency.EUR,
  ...
})
...
```

Also, since we make use of default exports, if you wish to import these modules directly in CommonJS fashion (e.g. `require()`), then make sure you're accessing the `default` keyword of the module.

```js
const TokenPayClient = require('@tokenpayeng/tokenpay/TokenPayClient'); // this won't work

...

const TokenPayClient = require('@tokenpayeng/tokenpay/TokenPayClient').default; // however, this will
```

## Examples
Included in the project are a number of examples that cover almost all use-cases. Refer to [the `samples/` folder](./samples)] for more info.

Aside from demonstrating different business use cases, we also added technically different variants of certain examples to reflect the diversity in technnical stacks. These examples are located under the [samples/misc](./samples/misc) folder, and what they represent are indicated by filename suffixes listed below:

| Filename Suffix | Description |
|-----------------|-------------|
| `.es5.js` | ES5-style JavaScript code with bulk CommonJS imports (e.g. `var` keyword for variables, `require()` keyword for imports, inline `function()` blocks) |
| `.es6.js` | ES6-style JavaScript code with ES6 imports (e.g. `let/const` keyword for variables, `import` keyword for imports, lambda expressions) |
| `.ts` | TypeScript code |
| `.js` | Node.js v6+ (ES6-style JavaScript code with direct CommonJS imports) (e.g. `let/const` keyword for variables, `require()` keyword for imports, lambda expressions) |

### Running the Examples
If you've cloned this repo on your development machine and wish to run the examples directly, make sure to install the dependencies using `npm i` and build the library using `npm run build`. Once the library is built, you can run an example with the command `node <example path>` (e.g. `node samples/payment/SearchPayments.js`).

Keep in mind that the `node` interpreter cannot be used to execute TypeScript files, whereas the `ts-node` can. This interpreter does not ship with Node.js itself, so you'll either have to install it globally on your machine, or include it in your project as a dependency. This repository already includes it as a dev dependency, and exposes it as an NPM task with the name`ts-node`, so to run a TypeScript example you can simply execute the command `npm run ts-node <example path>` (e.g. `npm run ts-node samples/misc/CreatePayment.ts`).

### Credit Card Payment Use Case (ES5-Style)
Let's quickly review an example where we implement a credit card payment scenario using an ES5-style approach

> For more examples covering almost all use-cases, check out the [examples in the `samples/` folder](./samples)

```js
var TokenPay = require('../dist');

var tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

var request = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0,
  installment: 1,
  conversationId: 'foo-bar',
  currency: TokenPay.Model.Currency.TRY,
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
      name: 'Item 1',
      price: 30.0,
      subMerchantId: 1,
      subMerchantPrice: 27.0
    },
    {
      name: 'Item 2',
      price: 50.0,
      subMerchantId: 1,
      subMerchantPrice: 42.0
    },
    {
      name: 'Sanitizer',
      price: 20.0,
      subMerchantId: 1,
      subMerchantPrice: 18.0
    }
  ]
};

tokenPay.payment().createPayment(request)
  .then(function(result) {
    console.info('Payment successful', result);
  })
  .catch(function(err) {
    console.error('Payment failed', err);
  });
```

### Advanced Usage: Adapters
In reality, the `TokenPayClient` class serves as a collection of adapters that integrates with different parts of the API. While the intended usage for most use-cases is to instantiate a `TokenPayClient` instance (as illustrated in the examples above) and use its adapter accessors (e.g. `payment()`), you can also manually import a certain adapter class and instantiate it.

**Note:** When instantiating an adapter, you can use the same options as you would when instantiating a `TokenPayClient`

For all adapters in the `TokenPayClient`, their purposes, accessors, as well as direct import paths, refer to the list below:

| Adapter Name | Purpose | Accessor | Import Path |
|--------------|---------|----------|-------------|
| `InstallmentAdapter` | Retrieving per-installment pricing information based on installment count or BIN number | `installment()` | `@tokenpayeng/tokenpay/adapters/InstallmentAdapter` |
| `OnboardingAdapter` | Conducting CRUD operations on buyers and sub merchants | `onboarding()` | `@tokenpayeng/tokenpay/adapters/OnboardingAdapter` |
| `PaymentAdapter` | Conducting payments, retrieving payment information, managing stored cards | `payment()` | `@tokenpayeng/tokenpay/adapters/PaymentAdapter` |
| `SettlementReportingAdapter` | Retrieving information on settlements | `settlementReporting()` | `@tokenpayeng/tokenpay/adapters/SettlementReportingAdapter` |

## Development
To contribute to the project, please see our guidelines at [CONTRIBUTING](./CONTRIBUTING.md)

## License
MIT
