import Status from '../model/Status';
declare type BuyerResponse = {
    id: number;
    status: Status;
    email: string;
    identityNumber: string;
    name: string;
    surname: string;
    gsmNumber: string;
    buyerExternalId: string;
};
export default BuyerResponse;
