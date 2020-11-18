import BaseAdapter from './BaseAdapter';
import {ClientCreationOptions} from '../lib/HttpClient';

import SearchInstallmentsRequest from '../request/SearchInstallmentsRequest';

import BinNumberResponse from '../response/BinNumberResponse';
import SearchInstallmentsResponse from '../response/SearchInstallmentsResponse';
import DataResponse from "../response/DataResponse";

export default class InstallmentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchInstallments(request: SearchInstallmentsRequest): Promise<DataResponse<SearchInstallmentsResponse>> {
    return this._client.get('/installment/v1/installments', request);
  }

  async retrieveBinNumber(binNumber: string): Promise<BinNumberResponse> {
    return this._client.get(`/installment/v1/bins/${binNumber}`);
  }
}
