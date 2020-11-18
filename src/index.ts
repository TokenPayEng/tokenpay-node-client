import Adapter from './adapter';
import Model from './model';
import TokenPayClient from './TokenPayClient';
import TokenPayError from './TokenPayError';

const TokenPay = {
  Client: TokenPayClient,
  Model,
  Adapter,
  TokenPayError
};

export = TokenPay;
