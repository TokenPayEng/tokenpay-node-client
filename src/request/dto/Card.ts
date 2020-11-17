export type PaymentCard = {
  cardAlias?: string;
  cardHolderName: string;
  cardNumber: string;
  expireYear: string;
  expireMonth: string;
  cvc: string;
  storeCardAfterSuccessPayment?: boolean;
};

export type StoredCard = {
  cardUserKey: string;
  cardToken: string;
};

export type Card = PaymentCard | StoredCard;
