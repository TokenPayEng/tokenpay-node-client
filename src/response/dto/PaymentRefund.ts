import PaymentType from '../../model/PaymentType'
import RefundStatus from '../../model/RefundStatus'
import RefundDestinationType from '../../model/RefundDestinationType'
import Error from './Error'

export type PaymentRefund = {
  id: number;
  createdDate: Date;
  refundStatus: RefundStatus;
  refundDestinationType: RefundDestinationType;
  price: number;
  refundBankPrice: number;
  refundWalletPrice: number;
  conversationId: string;
  paymentType: PaymentType;
  error: Error;
};

export default PaymentRefund;
