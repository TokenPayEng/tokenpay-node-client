import {ClientCreationOptions} from '../lib/HttpClient';

import SearchBouncedSubMerchantRowsRequest from '../request/SearchBouncedSubMerchantRowsRequest';
import SearchPayoutCompletedTransactionsRequest from '../request/SearchPayoutCompletedTransactionsRequest';

import BouncedSubMerchantRowListResponse from '../response/BouncedSubMerchantRowListResponse';
import DataResponse from '../response/DataResponse';
import PayoutCompletedTransactionListResponse from '../response/PayoutCompletedTransactionListResponse';

import BaseAdapter from './BaseAdapter';

export default class SettlementReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchBouncedSubMerchantRows(request: SearchBouncedSubMerchantRowsRequest): Promise<BouncedSubMerchantRowListResponse> {
    return this._client.get('/settlement-reporting/v1/settlement-file/bounced-sub-merchant-rows', request);
  }

  async searchPayoutCompletedTransactions(request: SearchPayoutCompletedTransactionsRequest): Promise<PayoutCompletedTransactionListResponse> {
    return this._client.get('/settlement-reporting/v1/settlement-file/payout-completed-transactions', request);
  }
}
