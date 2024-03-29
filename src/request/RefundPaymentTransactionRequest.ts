import RefundDestinationType from '../model/RefundDestinationType';

type RefundPaymentTransactionRequest = {
  paymentTransactionId: number;
  conversationId: string;
  refundPrice: number;
  refundDestinationType: RefundDestinationType;
};

export default RefundPaymentTransactionRequest;
