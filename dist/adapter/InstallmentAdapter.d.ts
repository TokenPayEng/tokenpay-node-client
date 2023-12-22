import { ClientCreationOptions } from '../lib/HttpClient';
import SearchInstallmentsRequest from '../request/SearchInstallmentsRequest';
import BinNumberResponse from '../response/BinNumberResponse';
import InstallmentListResponse from '../response/InstallmentListResponse';
import BaseAdapter from './BaseAdapter';
export default class InstallmentAdapter extends BaseAdapter {
    constructor(options: ClientCreationOptions);
    searchInstallments(request: SearchInstallmentsRequest): Promise<InstallmentListResponse>;
    retrieveBinNumber(binNumber: string): Promise<BinNumberResponse>;
}
