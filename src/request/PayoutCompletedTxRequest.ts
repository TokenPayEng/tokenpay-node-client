import SettlementType from '../model/SettlementType';

type PayoutCompletedTxRequest = {
  settlementFileId: number;
  settlementType: SettlementType;
  startDate: Date;
  endDate: Date;
};

export default PayoutCompletedTxRequest;
