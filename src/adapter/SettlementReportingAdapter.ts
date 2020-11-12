import BaseAdapter from './BaseAdapter';
import {ClientCreationOptions} from '../lib/HttpClient';

import BouncedSubMerchantRowRequest from '../request/BouncedSubMerchantRowRequest';
import PayoutCompletedTxRequest from '../request/PayoutCompletedTxRequest';

import BouncedSubMerchantRowResponse from '../response/BouncedSubMerchantRowResponse';
import PayoutCompletedTxResponse from '../response/PayoutCompletedTxResponse';
import DataResponse from '../response/DataResponse';

export default class SettlementReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async retrieveBouncedSubMerchantRows(request: BouncedSubMerchantRowRequest): Promise<DataResponse<BouncedSubMerchantRowResponse>> {
    return this._client.get('/settlement-reporting/v1/settlement-file/bounced-sub-merchant-rows', request);
  }

  async retrievePayoutCompletedTransactions(request: PayoutCompletedTxRequest): Promise<DataResponse<PayoutCompletedTxResponse>> {
    return this._client.get('/settlement-reporting/v1/settlement-file/payout-completed-transactions', request);
  }
}
