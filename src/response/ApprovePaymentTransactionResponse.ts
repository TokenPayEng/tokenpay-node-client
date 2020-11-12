import ApprovalStatus from '../model/ApprovalStatus'

type ApprovePaymentTransactionResponse = {
  paymentTransactionId: number;
  approvalStatus: ApprovalStatus;
  failedReason: string;
}

export default ApprovePaymentTransactionResponse;
