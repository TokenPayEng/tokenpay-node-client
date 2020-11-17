import {Card} from './dto/Card';

import PaymentItem from './dto/PaymentItem';
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
  callbackUrl?: string;
  card?: Card;
  items: PaymentItem[];
};

export default CreatePaymentRequest;
