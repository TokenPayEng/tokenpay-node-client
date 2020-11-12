import PaymentType from '../../model/PaymentType'
import RefundStatus from '../../model/RefundStatus'
import RefundDestinationType from '../../model/RefundDestinationType'
import ErrorDto from './ErrorDto'

export type PaymentTxRefund = {
  id: number;
  createdDate: Date;
  refundStatus: RefundStatus ;
  refundDestinationType: RefundDestinationType;
  refundPrice: number;
  refundBankPrice: number;
  refundWalletPrice: number;
  paymentType: PaymentType;
  conversationId: string;
  isAfterSettlement: boolean;
  error: ErrorDto;
};

export default PaymentTxRefund;