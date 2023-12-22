import RefundDestinationType from '../model/RefundDestinationType';
import RefundStatus from '../model/RefundStatus';
declare type PaymentTransactionRefundResponse = {
    id: number;
    conversationId: string;
    createdDate: Date;
    status: RefundStatus;
    isAfterSettlement: boolean;
    refundPrice: number;
    refundBankPrice: number;
    refundWalletPrice: number;
    currency: string;
    paymentTransactionId: number;
    paymentId: number;
    refundDestinationType: RefundDestinationType;
};
export default PaymentTransactionRefundResponse;
