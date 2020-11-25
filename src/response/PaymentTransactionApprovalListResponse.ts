import ApprovalStatus from '../model/ApprovalStatus';
import PaymentTransactionApproval from './dto/PaymentTransactionApproval';

type PaymentTransactionApprovalListResponse = {
  size: number;
  items: PaymentTransactionApproval[];
};

export default PaymentTransactionApprovalListResponse;
