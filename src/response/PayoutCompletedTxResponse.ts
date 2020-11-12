type PayoutCompletedTxResponse = {
  transactionId: number;
  transactionType: string;
  payoutAmount: number;
  currency: string;
  merchantId: number;
  merchantType: string;
};

export default PayoutCompletedTxResponse;
