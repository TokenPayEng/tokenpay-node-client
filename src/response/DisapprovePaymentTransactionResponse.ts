import ApprovalStatus from '../model/ApprovalStatus';

type DisapprovePaymentTransactionResponse = {
  paymentTransactionId: number;
  approvalStatus: ApprovalStatus;
  failedReason: string;
};

export default DisapprovePaymentTransactionResponse;
