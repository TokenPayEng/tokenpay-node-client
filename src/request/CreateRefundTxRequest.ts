import RefundDestinationType from '../model/RefundDestinationType'

type CreateRefundTxRequest = { // todo CreatePaymentTxRefundRequest
  paymentTransactionId: number;
  conversationId: string;
  refundPrice: number;
  refundDestinationType: RefundDestinationType;
};

export default CreateRefundTxRequest;
