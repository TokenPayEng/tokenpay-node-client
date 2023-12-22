import Currency from '../model/Currency';
declare type CrossBookingRequest = {
    reason: string;
    price: number;
    currency: Currency;
    subMerchantId: number;
};
export default CrossBookingRequest;
