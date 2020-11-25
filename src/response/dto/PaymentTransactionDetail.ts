import TransactionStatus from '../../model/TransactionStatus';
import PaymentTransactionCard from '../dto/PaymentTransactionCard';
import PaymentTransactionRefund from '../dto/PaymentTransactionRefund';

import Payout from './Payout';

type PaymentTransactionDetail = {
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
  paymentTransactionCard: PaymentTransactionCard;
  paymentTransactionRefunds: PaymentTransactionRefund[];
};

export default PaymentTransactionDetail;
