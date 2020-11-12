type ConvertedPaymentTxPayout = {
  paidPrice: number;
  currency: string;
  merchantPayoutAmount: number;
  subMerchantPayoutAmount: number;
  pfCommissionRateAmount: number;
  pfConversionRate: number;
  pfConversionRateAmount: number;
}

export default ConvertedPaymentTxPayout;
