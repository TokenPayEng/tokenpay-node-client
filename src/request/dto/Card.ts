export type CreditCard = {
  cardHolderName: string;
  cardNumber: string;
  expireYear: string;
  expireMonth: string;
  cvc: string;
};

export type StoredCard = {
  cardAlias: string;
  cardUserKey: string;
  cardToken: string;
};

export type Card = CreditCard | StoredCard;