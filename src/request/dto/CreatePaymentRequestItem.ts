type CreatePaymentRequestItem = {
  name: string;
  price: number;
  subMerchantId?: number;
  subMerchantPrice?: number;
};

export default CreatePaymentRequestItem;
