import CrossBookingTransactionStatus from '../model/CrossBookingTransactionStatus'
import MerchantType from '../model/MerchantType'

type SearchCrossBookingsRequest = {
  transactionStatus: CrossBookingTransactionStatus;
  sourceMerchantId: number;
  destinationMerchantId: number;
  sourceMerchantType: MerchantType;
  destinationMerchantType: MerchantType;
  page: number;
  size: number;
};

export default SearchCrossBookingsRequest;
