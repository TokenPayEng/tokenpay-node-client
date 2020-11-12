import PaymentType from '../../model/PaymentType'
import RefundStatus from '../../model/RefundStatus'
import RefundDestinationType from '../../model/RefundDestinationType'
import ErrorDto from './ErrorDto'

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
  error: ErrorDto;
};

export default PaymentRefund;