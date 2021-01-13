import PaymentPhase from '../model/PaymentPhase';
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
  paymentPhase: PaymentPhase;
  conversationId: string;
  card?: Card;
  posAlias: string;
  items: PaymentItem[];
};

export default CreatePaymentRequest;
