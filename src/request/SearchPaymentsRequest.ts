import PaymentStatus from '../model/PaymentStatus'
import Currency from '../model/Currency'
import Installment from '../model/Installment';

type SearchPaymentsRequest = {
  page?: number;
  size?: number;

  paymentIds?: number[];
  paymentTxIds?: number[];
  subMerchantIds?: number[];
  itemExternalIds?: string[];
  paymentStatus?: PaymentStatus;

  currency?: Currency;
  binNumber?: string;
  lastFourDigits?: string;

  minPrice?: number;
  minPaidPrice?: number;
  maxPrice?: number;
  maxPaidPrice?: number;

  installment?: Installment;
  conversationId?: string;
  isThreeDS?: boolean;

  minCreatedDate?: Date;
  maxCreatedDate?: Date;
};

export default SearchPaymentsRequest;
