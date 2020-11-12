import RefundStatus from '../model/RefundStatus'
import RefundType from '../model/RefundType'
import RefundDestinationType from '../model/RefundDestinationType'
import RefundTxResponse from '../response/RefundTxResponse';

export type RefundPaymentResponse = {
  id: number;
  conversationId: string;
  createdDate: Date;
  status: RefundStatus;
  refundPrice: number;
  refundBankPrice: number;
  refundWalletPrice: number;
  refundType: RefundType;
  refundDestinationType: RefundDestinationType;
  currency: string;
  paymentId: number;
  paymentTxRefunds: RefundTxResponse[];
};

export default RefundPaymentResponse;