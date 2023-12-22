import CardAssociation from '../model/CardAssociation';
import CardType from '../model/CardType';
declare type SearchStoredCardsRequest = {
    cardAlias?: string;
    cardBrand?: string;
    cardType?: CardType;
    cardUserKey?: string;
    cardToken?: string;
    cardBankName?: string;
    cardAssociation?: CardAssociation;
    page?: number;
    size?: number;
};
export default SearchStoredCardsRequest;
