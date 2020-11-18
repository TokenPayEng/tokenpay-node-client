import Currency from '../../model/Currency';

type Payout = {
  paidPrice: number;
  currency: Currency;
  merchantPayoutAmount: number;
  subMerchantPayoutAmount: number;
  pfCommissionRateAmount: number;
  pfConversionRate: number;
  pfConversionRateAmount: number;
};

export default Payout;
