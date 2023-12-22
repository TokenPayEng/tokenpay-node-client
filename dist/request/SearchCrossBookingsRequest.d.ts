import CrossBookingTransactionStatus from '../model/CrossBookingTransactionStatus';
import MerchantType from '../model/MerchantType';
declare type SearchCrossBookingsRequest = {
    sourceMerchantId: number;
    sourceMerchantType: MerchantType;
    destinationMerchantId: number;
    destinationMerchantType: MerchantType;
    transactionStatus: CrossBookingTransactionStatus;
    page: number;
    size: number;
};
export default SearchCrossBookingsRequest;
