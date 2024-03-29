import CardAssociation from '../model/CardAssociation';
import CardType from '../model/CardType';
import Currency from '../model/Currency';
import Installment from '../model/Installment';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';
import PaymentStatus from '../model/PaymentStatus';
import PaymentType from '../model/PaymentType';
import ConnectorType from '../model/ConnectorType';

import PaymentTransaction from './dto/PaymentTransaction';

type PaymentResponse = {
  id: number;
  createdDate: Date;
  price: number;
  paidPrice: number;
  walletPrice: number;
  currency: Currency;
  buyerId?: number;
  installment?: Installment;
  conversationId: string;
  paymentType: PaymentType;
  paymentGroup: PaymentGroup;
  paymentStatus: PaymentStatus;
  connectorType: ConnectorType;
  paymentPhase: PaymentPhase;
  isThreeDS: boolean;
  merchantCommissionRate: number;
  merchantCommissionRateAmount: number;
  pfCommissionRateAmount: number;
  cardUserKey: string;
  cardToken: string;
  paidWithStoredCard: boolean;
  binNumber?: string;
  lastFourDigits?: string;
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  paymentTransactions: PaymentTransaction[];
};

export default PaymentResponse;
