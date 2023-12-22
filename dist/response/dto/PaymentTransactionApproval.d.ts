import ApprovalStatus from '../../model/ApprovalStatus';
declare type PaymentTransactionApproval = {
    paymentTransactionId: number;
    approvalStatus: ApprovalStatus;
    failedReason: string;
};
export default PaymentTransactionApproval;
