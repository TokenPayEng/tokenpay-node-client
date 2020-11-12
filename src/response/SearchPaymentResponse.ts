import PaymentType from '../model/PaymentType'
import Currency from '../model/Currency'
import PaymentStatus from '../model/PaymentStatus'
import PaymentCard from './dto/PaymentCard'
import PaymentRefund from './dto/PaymentCard'
import PaymentTx from './dto/PaymentTx'


type SearchPaymentResponse = {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  merchantId: number;
  orderId: string;
  price: number;
  paidPrice: number;
  walletPrice: number;
  paymentType: PaymentType;
  currency: Currency;
  paymentStatus: PaymentStatus;
  conversationId: string;
  paymentCard: PaymentCard;
  paymentRefunds: PaymentRefund[];
  paymentTxs: PaymentTx[];
}

export default SearchPaymentResponse;
