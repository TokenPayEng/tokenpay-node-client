import CardAssociation from '../model/CardAssociation';
import CardType from '../model/CardType';

type BinCheckResponse = {
  binNumber: string;
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  bankName: string;
  bankCode: number;
  commercial: boolean;
};

export default BinCheckResponse;
