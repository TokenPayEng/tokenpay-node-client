import Currency from '../model/Currency'
import MerchantType from '../model/MerchantType'

type PayoutCompletedTransactionResponse = {
  transactionId: number;
  transactionType: string;
  payoutAmount: number;
  currency: Currency;
  merchantId: number;
  merchantType: MerchantType;
};

export default PayoutCompletedTransactionResponse;
