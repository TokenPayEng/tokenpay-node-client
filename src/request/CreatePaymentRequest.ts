import Currency from '../model/Currency';
import Installment from '../model/Installment';
import PaymentGroup from '../model/PaymentGroup';

import {Card} from './dto/Card';
import PaymentItem from './dto/PaymentItem';

type CreatePaymentRequest = {
  price: number;
  paidPrice: number;
  walletPrice: number;
  installment: Installment;
  buyerId?: number;
  currency: Currency;
  paymentGroup: PaymentGroup;
  conversationId: string;
  callbackUrl?: string;
  card?: Card;
  items: PaymentItem[];
};

export default CreatePaymentRequest;
