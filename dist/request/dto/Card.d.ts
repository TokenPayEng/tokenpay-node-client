export declare type PaymentCard = {
    cardAlias?: string;
    cardHolderName: string;
    cardNumber: string;
    expireYear: string;
    expireMonth: string;
    cvc: string;
    storeCardAfterSuccessPayment?: boolean;
};
export declare type StoredCard = {
    cardUserKey: string;
    cardToken: string;
};
export declare type Card = PaymentCard | StoredCard;
