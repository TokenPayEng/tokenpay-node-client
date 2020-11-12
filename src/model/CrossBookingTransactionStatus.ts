enum CrossBookingTransactionStatus {
  WaitingForPayout = 'WAITING_FOR_PAYOUT',
  PayoutStarted = 'PAYOUT_STARTED',
  PayoutCompleted = 'PAYOUT_COMPLETED',
  NotFoundInSettlement = 'NOT_FOUND_IN_SETTLEMENT',
  Cancelled = 'CANCELLED'
};

export default CrossBookingTransactionStatus;
