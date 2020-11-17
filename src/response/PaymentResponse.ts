import Currency from "../model/Currency";
import Installment from "../model/Installment"
import PaymentType from "../model/PaymentType"
import PaymentGroup from "../model/PaymentGroup"
import PaymentStatus from "../model/PaymentStatus"
import PaymentPhase from "../model/PaymentPhase"
import CardType from "../model/CardType"
import CardAssociation from "../model/CardAssociation"
import PaymentTransaction from "./dto/PaymentTransaction"

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
}

export default PaymentResponse;
