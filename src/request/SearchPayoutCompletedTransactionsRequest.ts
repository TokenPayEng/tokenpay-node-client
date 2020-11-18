import SettlementType from '../model/SettlementType';

type SearchPayoutCompletedTransactionsRequest = {
  settlementFileId: number;
  settlementType: SettlementType;
  startDate: Date;
  endDate: Date;
};

export default SearchPayoutCompletedTransactionsRequest;
