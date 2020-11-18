import RefundStatus from '../model/RefundStatus'
import RefundType from '../model/RefundType'
import RefundDestinationType from '../model/RefundDestinationType'
import PaymentTransactionRefundResponse from '../response/PaymentTransactionRefundResponse';
import Currency from '../model/Currency';

type PaymentRefundResponse = {
  id: number;
  conversationId: string;
  createdDate: Date;
  status: RefundStatus;
  refundPrice: number;
  refundBankPrice: number;
  refundWalletPrice: number;
  refundType: RefundType;
  refundDestinationType: RefundDestinationType;
  currency: Currency;
  paymentId: number;
  paymentTxRefunds: PaymentTransactionRefundResponse[];
};

export default PaymentRefundResponse;
