import SettlementType from '../model/SettlementType';

type ListPayoutCompletedTransactionsRequest = {
  settlementFileId: number;
  settlementType: SettlementType;
  startDate: Date;
  endDate: Date;
};

export default ListPayoutCompletedTransactionsRequest;
