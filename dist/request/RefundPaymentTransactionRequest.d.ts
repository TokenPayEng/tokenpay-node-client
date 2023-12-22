import RefundDestinationType from '../model/RefundDestinationType';
declare type RefundPaymentTransactionRequest = {
    paymentTransactionId: number;
    conversationId: string;
    refundPrice: number;
    refundDestinationType: RefundDestinationType;
};
export default RefundPaymentTransactionRequest;
