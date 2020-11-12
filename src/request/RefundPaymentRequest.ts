import RefundDestinationType from '../model/RefundDestinationType'

type CreateRefundRequest = {
  paymentId: number;
  conversationId: string;
  refundDestinationType: RefundDestinationType;
};

export default CreateRefundRequest;
