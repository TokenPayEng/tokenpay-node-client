const test = require('ava');

const TokenPayError = require('../dist').TokenPayError;

test('TokenPayError should be able to be constructed from an error code and description', t => {
  const errorCode = 'foo';
  const errorDescription = 'bar';
  const error = new TokenPayError({errorCode, errorDescription});
  t.is(error.getErrorCode(), errorCode);
  t.is(error.getErrorDescription(), errorDescription);
  t.is(error.message, errorDescription);
});

test('TokenPayError should retain additional data', t => {
  const errorCode = 'foo';
  const errorDescription = 'bar';
  const additionalData = {
    foo: 'bar',
    baz: {
      quux: 42
    }
  };
  const error = new TokenPayError({errorCode, errorDescription, ...additionalData});
  t.is(error.getErrorCode(), errorCode);
  t.is(error.getErrorDescription(), errorDescription);
  t.deepEqual(error.getErrorData(), additionalData);
  t.is(error.message, errorDescription);
});

test('TokenPayError should have its own constructor', t => {
  const error = new TokenPayError({errorCode: 'foo', errorDescription: 'bar'});
  t.true(error instanceof TokenPayError);
  t.is(Object.getPrototypeOf(error), TokenPayError.prototype);
  t.is(Object.getPrototypeOf(error).constructor, TokenPayError);
});

test('TokenPayError should be an instance of the built-in Error class', t => {
  const error = new TokenPayError({errorCode: 'foo', errorDescription: 'bar'});
  t.true(error instanceof Error);
});

test('TokenPayError should have its own stack', t => {
  const error = new TokenPayError({errorCode: 'foo', errorDescription: 'bar'});
  t.truthy(error.stack);
});
