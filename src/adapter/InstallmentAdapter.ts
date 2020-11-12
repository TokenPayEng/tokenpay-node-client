import BaseAdapter from './BaseAdapter';
import {ClientCreationOptions} from '../lib/HttpClient';

import InstallmentSearchRequest from '../request/InstallmentSearchRequest';

import BinCheckResponse from '../response/BinCheckResponse';
import DataResponse from '../response/DataResponse';
import InstallmentResponse from '../response/InstallmentResponse';

export default class InstallmentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async retrieveInstallments(request: InstallmentSearchRequest): Promise<DataResponse<InstallmentResponse>> {
    return this._client.get('/installment/v1/installments', request);
  }

  async checkBinNumber(binNumber: string): Promise<BinCheckResponse> {
    return this._client.get(`/installment/v1/bins/${binNumber}`);
  }
}
