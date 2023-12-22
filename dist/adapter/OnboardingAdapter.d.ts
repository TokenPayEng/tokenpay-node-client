import { ClientCreationOptions } from '../lib/HttpClient';
import CreateBuyerRequest from '../request/CreateBuyerRequest';
import CreateSubMerchantRequest from '../request/CreateSubMerchantRequest';
import SearchBuyerRequest from '../request/SearchBuyerRequest';
import SearchSubMerchantsRequest from '../request/SearchSubMerchantsRequest';
import UpdateBuyerRequest from '../request/UpdateBuyerRequest';
import UpdateSubMerchantRequest from '../request/UpdateSubMerchantRequest';
import BuyerResponse from '../response/BuyerResponse';
import DataResponse from '../response/DataResponse';
import SubMerchantResponse from '../response/SubMerchantResponse';
import BaseAdapter from './BaseAdapter';
export default class OnboardingAdapter extends BaseAdapter {
    constructor(options: ClientCreationOptions);
    createSubMerchant(request: CreateSubMerchantRequest): Promise<SubMerchantResponse>;
    updateSubMerchant(subMerchantId: number, request: UpdateSubMerchantRequest): Promise<SubMerchantResponse>;
    retrieveSubMerchant(subMerchantId: number): Promise<SubMerchantResponse>;
    searchSubMerchants(request: SearchSubMerchantsRequest): Promise<DataResponse<SubMerchantResponse>>;
    createBuyer(request: CreateBuyerRequest): Promise<BuyerResponse>;
    updateBuyer(buyerId: number, request: UpdateBuyerRequest): Promise<BuyerResponse>;
    retrieveBuyer(buyerId: number): Promise<BuyerResponse>;
    searchBuyers(request: SearchBuyerRequest): Promise<DataResponse<BuyerResponse>>;
}
