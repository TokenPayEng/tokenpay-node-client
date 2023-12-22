import OfferProduct from "./dto/OfferProduct";
declare type PreviewCreditPaymentResponse = {
    offerProductTable: OfferProduct[];
    resultCode: number;
    resultExplanation: string;
};
export default PreviewCreditPaymentResponse;
