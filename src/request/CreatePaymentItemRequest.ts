type CreatePaymentItemRequest = {
  externalId: string;
  name: string;
  price: number;
  subMerchantId?: number;
  subMerchantPrice?: number;
};

export default CreatePaymentItemRequest;
