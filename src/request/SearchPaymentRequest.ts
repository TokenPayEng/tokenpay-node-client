import PaymentStatus from '../model/PaymentStatus'
import Currency from '../model/Currency'

type SearchPaymentRequest = {
  
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

  installment?: number;
  conversationId?: string;
  isThreeDS?: boolean;

  minCreatedDate?: Date;
  maxCreatedDate?: Date;
};

export default SearchPaymentRequest;
