import {ClientCreationOptions} from '../lib/HttpClient';

import CreateBuyerRequest from '../request/CreateBuyerRequest';
import CreateSubMerchantRequest from '../request/CreateSubMerchantRequest';
import SearchSubMerchantsRequest from '../request/SearchSubMerchantsRequest';
import UpdateBuyerRequest from '../request/UpdateBuyerRequest';
import UpdateSubMerchantRequest from '../request/UpdateSubMerchantRequest';

import BuyerResponse from '../response/BuyerResponse';
import DataResponse from '../response/DataResponse';
import SubMerchantResponse from '../response/SubMerchantResponse';

import BaseAdapter from './BaseAdapter';

export default class OnboardingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createSubMerchant(request: CreateSubMerchantRequest): Promise<SubMerchantResponse> {
    return this._client.post('/onboarding/v1/sub-merchants', request);
  }

  async updateSubMerchant(subMerchantId: number, request: UpdateSubMerchantRequest): Promise<SubMerchantResponse> {
    return this._client.put(`/onboarding/v1/sub-merchants/${subMerchantId}`, request);
  }

  async retrieveSubMerchant(subMerchantId: number): Promise<SubMerchantResponse> {
    return this._client.get(`/onboarding/v1/sub-merchants/${subMerchantId}`);
  }

  async searchSubMerchants(request: SearchSubMerchantsRequest): Promise<DataResponse<SubMerchantResponse>> {
    return this._client.get(`/onboarding/v1/sub-merchants`, request);
  }

  async createBuyer(request: CreateBuyerRequest): Promise<BuyerResponse> {
    return this._client.post('/onboarding/v1/buyers', request);
  }

  async updateBuyer(buyerId: number, request: UpdateBuyerRequest): Promise<BuyerResponse> {
    return this._client.put(`/onboarding/v1/buyers/${buyerId}`, request);
  }

  async retrieveBuyer(buyerId: number): Promise<BuyerResponse> {
    return this._client.get(`/onboarding/v1/buyers/${buyerId}`);
  }
}
