import Currency from '../model/Currency';

type CrossBookingRequest = {
  reason: string;
  price: number;
  currency: Currency;
  subMerchantId: number;
};

export default CrossBookingRequest;
