import PaymentType from '../../model/PaymentType';
import RefundDestinationType from '../../model/RefundDestinationType';
import RefundStatus from '../../model/RefundStatus';
import Error from './Error';
declare type PaymentRefund = {
    id: number;
    createdDate: Date;
    refundStatus: RefundStatus;
    refundDestinationType: RefundDestinationType;
    price: number;
    refundBankPrice: number;
    refundWalletPrice: number;
    conversationId: string;
    paymentType: PaymentType;
    error: Error;
};
export default PaymentRefund;
