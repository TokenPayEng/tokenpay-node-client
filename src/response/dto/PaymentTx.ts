import TransactionStatus from '../../model/TransactionStatus'
import ConvertedPaymentTxPayout from './ConvertedPaymentTxPayout'
import PaymentTxCard from './PaymentTxCard'
import PaymentTxRefund from './PaymentTxRefund'

export type PaymentTx = {
  id: number;
  createdDate: Date;
  externalId: string;
  transactionStatus: TransactionStatus;
  transactionStatusDate: Date;
  price: number;
  paidPrice: number;
  walletPrice: number;
  merchantPayoutAmount: number;
  subMerchantId: number;
  subMerchantName: string;
  subMerchantPrice: number;
  subMerchantPayoutRate: number;
  subMerchantPayoutAmount: number;
  convertedPayout: ConvertedPaymentTxPayout;
  paymentTxCard: PaymentTxCard;
  paymentTxRefunds: PaymentTxRefund[];
};

export default PaymentTx;