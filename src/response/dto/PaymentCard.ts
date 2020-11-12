import CardType from '../../model/CardType'
import CardAssociation from '../../model/CardAssociation'
import Installment from '../../model/Installment'
import ErrorDto from './ErrorDto'

export type CreditCard = {
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  cardHolderName: string;
  binNumber: string;
  lastFourDigits: string;
  installment: Installment;
  isThreeDS: boolean;
  mdStatus: number;
  pfCommissionRateAmount: number;
  merchantCommissionRate: number;
  merchantCommissionRateAmount: number;
  error: ErrorDto;
};

export default CreditCard;