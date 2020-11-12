import RefundDestinationType from '../model/RefundDestinationType'

type CreateRefundTxRequest = {
  paymentTransactionId: number;
  conversationId: string;
  refundPrice: number;
  refundDestinationType: RefundDestinationType;
};

export default CreateRefundTxRequest;
