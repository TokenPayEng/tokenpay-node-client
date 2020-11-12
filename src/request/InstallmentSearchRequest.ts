import Currency from '../model/Currency';

type InstallmentSearchRequest = {
  binNumber: string;
  price: number;
  currency: Currency;
};

export default InstallmentSearchRequest;
