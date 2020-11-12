import TransactionStatus from "../model/TransactionStatus";
import ConvertedPaymentTxPayout from "./dto/ConvertedPaymentTxPayout";

type CardPaymentTxResponse = {
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
  convertedPayout: ConvertedPaymentTxPayout;
}

export default CardPaymentTxResponse;
