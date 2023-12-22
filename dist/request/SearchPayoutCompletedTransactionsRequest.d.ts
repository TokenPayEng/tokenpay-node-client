import SettlementType from '../model/SettlementType';
declare type SearchPayoutCompletedTransactionsRequest = {
    settlementFileId: number;
    settlementType: SettlementType;
    startDate: Date;
    endDate: Date;
};
export default SearchPayoutCompletedTransactionsRequest;
