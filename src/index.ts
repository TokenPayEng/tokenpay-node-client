import TokenPayClient from './TokenPayClient';

import Adapter from './adapter';
import Model from './model'
import TokenPayError from './TokenPayError';

const TokenPay = {
  Client: TokenPayClient,
  Model,
  Adapter,
  TokenPayError
};

export = TokenPay;
