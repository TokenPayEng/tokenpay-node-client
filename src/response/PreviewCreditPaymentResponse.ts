import OfferProduct from "./dto/OfferProduct"

type PreviewCreditPaymentResponse = {
    offerProductTable : OfferProduct[];
    resultCode : number;
    resultExplanation: string;
}

export default PreviewCreditPaymentResponse;
