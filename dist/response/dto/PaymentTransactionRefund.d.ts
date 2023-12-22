import PaymentType from '../../model/PaymentType';
import RefundDestinationType from '../../model/RefundDestinationType';
import RefundStatus from '../../model/RefundStatus';
declare type PaymentTransactionRefund = {
    id: number;
    createdDate: Date;
    refundStatus: RefundStatus;
    refundDestinationType: RefundDestinationType;
    refundPrice: number;
    refundBankPrice: number;
    refundWalletPrice: number;
    paymentType: PaymentType;
    conversationId: string;
    isAfterSettlement: boolean;
    error: Error;
};
export default PaymentTransactionRefund;
