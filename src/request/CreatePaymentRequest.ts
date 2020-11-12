import {Card} from './dto/Card';

import CreatePaymentRequestItem from './dto/CreatePaymentRequestItem';
import Installment from '../model/Installment';
import Currency from '../model/Currency';
import PaymentGroup from '../model/PaymentGroup';

type CreatePaymentRequest = {
  price: number;
  paidPrice: number;
  walletPrice: number;
  installment: Installment;
  buyerId?: number;
  currency: Currency;
  paymentGroup: PaymentGroup;
  conversationId: string;
  card?: Card;
  items: CreatePaymentRequestItem[];
};

export default CreatePaymentRequest;
