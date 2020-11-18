var process = require('process');

var TokenPay = require('@tokenpay/tokenpay');

var tokenPay = new TokenPay.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://google.com'
});

function assert(expr, message) {
  if (!expr) {
    console.error('Check failed', message);
    return process.exit(1);
  }

  console.info('Check OK', message);
}
function assertAsync(fn, message) {
  try {
    fn(function(err, result) {
      if (err) {
        console.error('Async check failed', message, err);
        return process.exit(2);
      }

      console.info('Async check OK', message, result);
    });
  } catch (err) {
    console.error('Async check failed before being executed', message, err);
    process.exit(3)
  }
}

function isConstructor(fn) {
  return fn && (typeof fn === 'function') && fn.prototype && (fn.prototype.constructor === fn);
}

function testSearch(callback) {
  tokenPay.payment()
    .searchPayments({minPrice: 100, maxPrice: 150})
    .then(function(results) {
      callback(null, {success: true, totalSize: results.totalSize});
    })
    .catch(function(err) {
      if (err.response || err instanceof TokenPay.TokenPayError) {
        return callback(null, {success: false, error: {name: err.name, message: err.message}});
      }

      callback(err);
    });
}

assert(!!TokenPay, 'TokenPay must not be falsy');
assert(isConstructor(TokenPay.Client), 'TokenPay.Client must be a constructor');

assert(!!TokenPay.Model, 'TokenPay.Model must not be falsy')
assert(Object.keys(TokenPay.Model).length > 0, 'TokenPay.Model must not be empty');

assert(!!TokenPay.Adapter, 'TokenPay.Adapter must not be falsy')
assert(Object.keys(TokenPay.Adapter).length > 0, 'TokenPay.Adapter must not be empty');

assert(!!TokenPay.TokenPayError, 'TokenPay.TokenPayError must not be falsy');
assert(isConstructor(TokenPay.Client), 'TokenPay.TokenPayError must be a constructor');

assertAsync(testSearch, 'PaymentAdapter::searchPayments() should execute normally even if it cannot access the server');
