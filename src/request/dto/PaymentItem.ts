type PaymentItem = {
  name: string;
  price: number;
  externalId?: string;
  subMerchantId?: number;
  subMerchantPrice?: number;
};

export default PaymentItem;
