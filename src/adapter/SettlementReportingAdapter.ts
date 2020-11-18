import {ClientCreationOptions} from '../lib/HttpClient';

import SearchBouncedSubMerchantRowsRequest from '../request/SearchBouncedSubMerchantRowsRequest';
import SearchPayoutCompletedTransactionsRequest from '../request/SearchPayoutCompletedTransactionsRequest';

import BouncedSubMerchantRowResponse from '../response/BouncedSubMerchantRowResponse';
import DataResponse from '../response/DataResponse';
import PayoutCompletedTransactionResponse from '../response/PayoutCompletedTransactionResponse';

import BaseAdapter from './BaseAdapter';

export default class SettlementReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchBouncedSubMerchantRows(request: SearchBouncedSubMerchantRowsRequest): Promise<DataResponse<BouncedSubMerchantRowResponse>> {
    return this._client.get('/settlement-reporting/v1/settlement-file/bounced-sub-merchant-rows', request);
  }

  async searchPayoutCompletedTransactions(request: SearchPayoutCompletedTransactionsRequest): Promise<DataResponse<PayoutCompletedTransactionResponse>> {
    return this._client.get('/settlement-reporting/v1/settlement-file/payout-completed-transactions', request);
  }
}
