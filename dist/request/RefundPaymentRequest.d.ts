import RefundDestinationType from '../model/RefundDestinationType';
declare type RefundPaymentRequest = {
    paymentId: number;
    conversationId: string;
    refundDestinationType: RefundDestinationType;
};
export default RefundPaymentRequest;
