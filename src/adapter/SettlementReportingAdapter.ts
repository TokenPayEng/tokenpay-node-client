import BaseAdapter from './BaseAdapter';
import {ClientCreationOptions} from '../lib/HttpClient';

import ListBouncedSubMerchantRowsRequest from '../request/ListBouncedSubMerchantRowsRequest';
import ListPayoutCompletedTransactionsRequest from '../request/ListPayoutCompletedTransactionsRequest';

import BouncedSubMerchantRowResponse from '../response/BouncedSubMerchantRowResponse';
import PayoutCompletedTransactionResponse from '../response/PayoutCompletedTransactionResponse';
import DataResponse from '../response/DataResponse';

export default class SettlementReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async listBouncedSubMerchantRows(request: ListBouncedSubMerchantRowsRequest): Promise<DataResponse<BouncedSubMerchantRowResponse>> {
    return this._client.get('/settlement-reporting/v1/settlement-file/bounced-sub-merchant-rows', request);
  }

  async listPayoutCompletedTransactions(request: ListPayoutCompletedTransactionsRequest): Promise<DataResponse<PayoutCompletedTransactionResponse>> {
    return this._client.get('/settlement-reporting/v1/settlement-file/payout-completed-transactions', request);
  }
}
