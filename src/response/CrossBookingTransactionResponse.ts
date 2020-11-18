import CrossBookingTransactionStatus from '../model/CrossBookingTransactionStatus';

type CrossBookingTransactionResponse = {
  id: number;
  price: number;
  createdDate: Date;
  transactionStatus: CrossBookingTransactionStatus;
};

export default CrossBookingTransactionResponse;
