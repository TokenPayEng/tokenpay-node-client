import CardAssociation from '../../model/CardAssociation';
import CardType from '../../model/CardType';
import Installment from '../../model/Installment';

import Error from './Error';

type PaymentCard = {
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
  error: Error;
};

export default PaymentCard;
