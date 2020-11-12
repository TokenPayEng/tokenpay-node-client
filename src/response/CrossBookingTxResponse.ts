import CrossBookingTransactionStatus from "../model/CrossBookingTransactionStatus";

type CrossBookingTxResponse = {
  id: number;
  price: number;
  createdDate: Date;
  transactionStatus: CrossBookingTransactionStatus;
}

export default CrossBookingTxResponse;
