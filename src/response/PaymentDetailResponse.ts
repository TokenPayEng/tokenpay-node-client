import Currency from '../model/Currency';
import PaymentStatus from '../model/PaymentStatus';
import PaymentType from '../model/PaymentType';
import ConnectorType from '../model/ConnectorType';

import PaymentCard from './dto/PaymentCard';
import PaymentRefund from './dto/PaymentRefund';
import PaymentTransactionDetail from './dto/PaymentTransactionDetail';



type PaymentDetailResponse = {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  orderId: string;
  price: number;
  paidPrice: number;
  walletPrice: number;
  paymentType: PaymentType;
  connectorType: ConnectorType;
  currency: Currency;
  paymentStatus: PaymentStatus;
  conversationId: string;
  paymentCard: PaymentCard;
  paymentRefunds: PaymentRefund[];
  paymentTransactions: PaymentTransactionDetail[];
};

export default PaymentDetailResponse;
