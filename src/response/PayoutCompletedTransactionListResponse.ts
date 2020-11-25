import PayoutCompletedTransaction from './dto/PayoutCompletedTransaction'

type PayoutCompletedTransactionListResponse = {
  size: number;
  items: PayoutCompletedTransaction[];
};

export default PayoutCompletedTransactionListResponse;
