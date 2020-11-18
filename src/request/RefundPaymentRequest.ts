import RefundDestinationType from '../model/RefundDestinationType';

type RefundPaymentRequest = {
  paymentId: number;
  conversationId: string;
  refundDestinationType: RefundDestinationType;
};

export default RefundPaymentRequest;
