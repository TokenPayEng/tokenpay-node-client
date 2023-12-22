import { ClientCreationOptions } from '../lib/HttpClient';
import SearchBouncedSubMerchantRowsRequest from '../request/SearchBouncedSubMerchantRowsRequest';
import SearchPayoutCompletedTransactionsRequest from '../request/SearchPayoutCompletedTransactionsRequest';
import BouncedSubMerchantRowListResponse from '../response/BouncedSubMerchantRowListResponse';
import PayoutCompletedTransactionListResponse from '../response/PayoutCompletedTransactionListResponse';
import BaseAdapter from './BaseAdapter';
export default class SettlementReportingAdapter extends BaseAdapter {
    constructor(options: ClientCreationOptions);
    searchBouncedSubMerchantRows(request: SearchBouncedSubMerchantRowsRequest): Promise<BouncedSubMerchantRowListResponse>;
    searchPayoutCompletedTransactions(request: SearchPayoutCompletedTransactionsRequest): Promise<PayoutCompletedTransactionListResponse>;
}
