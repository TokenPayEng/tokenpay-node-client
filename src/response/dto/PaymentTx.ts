import TransactionStatus from '../../model/TransactionStatus'
import Payout from './Payout'
import PaymentTxCard from './PaymentTxCard'
import PaymentTxRefund from './PaymentTxRefund'

type PaymentTx = {
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
  payout: Payout;
  paymentTxCard: PaymentTxCard;
  paymentTxRefunds: PaymentTxRefund[];
};

export default PaymentTx;
