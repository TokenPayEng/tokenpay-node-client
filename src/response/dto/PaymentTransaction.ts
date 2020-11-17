import TransactionStatus from "../../model/TransactionStatus";
import Payout from "./Payout";

type PaymentTransaction = {
  id: number;
  externalId: string;
  name: string;
  price: number;
  paidPrice: number;
  walletPrice: number;
  merchantCommissionRate: number;
  merchantCommissionRateAmount: number;
  merchantPayoutAmount: number;
  subMerchantId: number;
  subMerchantPrice: number;
  subMerchantPayoutRate: number;
  subMerchantPayoutAmount: number;
  pfCommissionRateAmount: number;
  transactionStatus: TransactionStatus;
  blockageResolvedDate: Date;
  payout: Payout;
}

export default PaymentTransaction;
