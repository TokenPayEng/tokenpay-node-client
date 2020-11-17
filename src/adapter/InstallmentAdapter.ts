import BaseAdapter from './BaseAdapter';
import {ClientCreationOptions} from '../lib/HttpClient';

import SearchInstallmentsRequest from '../request/SearchInstallmentsRequest';

import CheckBinNumberResponse from '../response/CheckBinNumberResponse';
import SearchInstallmentsResponse from '../response/SearchInstallmentsResponse';

export default class InstallmentAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchInstallments(request: SearchInstallmentsRequest): Promise<SearchInstallmentsResponse> {
    return this._client.get('/installment/v1/installments', request);
  }

  async checkBinNumber(binNumber: string): Promise<CheckBinNumberResponse> {
    return this._client.get(`/installment/v1/bins/${binNumber}`);
  }
}
