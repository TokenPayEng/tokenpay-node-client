import Currency from '../model/Currency';
import Installment from '../model/Installment';
import PaymentGroup from '../model/PaymentGroup';
import PaymentItem from './dto/PaymentItem';
declare type InitCreditPaymentRequest = {
    price: number;
    installment: Installment;
    currency: Currency;
    paymentGroup: PaymentGroup;
    conversationId: string;
    items: PaymentItem[];
    checkoutFormToken: string;
    callbackUrl: string;
    creditorId: number;
    merchantBranchName: string;
    productType: string;
};
export default InitCreditPaymentRequest;
