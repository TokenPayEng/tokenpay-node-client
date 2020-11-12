import RefundStatus from "../model/RefundStatus";
import RefundDestinationType from "../model/RefundDestinationType";

type RefundTxResponse = {
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
}

export default RefundTxResponse;
