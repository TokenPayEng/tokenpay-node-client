import TransactionStatus from '../model/TransactionStatus';

import Payout from './dto/Payout';

type PaymentTransactionResponse = {
  id: number;
  name: string;
  externalId: string;
  transactionStatus: TransactionStatus;
  price: number;
  paidPrice: number;
  walletPrice: number;
  merchantPayoutAmount: number;
  subMerchantId: number;
  subMerchantPrice: number;
  subMerchantPayoutRate: number;
  subMerchantPayoutAmount: number;
  payout: Payout;
};

export default PaymentTransactionResponse;
