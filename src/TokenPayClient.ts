import BaseAdapter from './adapter/BaseAdapter';
import InstallmentAdapter from './adapter/InstallmentAdapter';
import OnboardingAdapter from './adapter/OnboardingAdapter';
import PaymentAdapter from './adapter/PaymentAdapter';
import SettlementReportingAdapter from './adapter/SettlementReportingAdapter';
import {ClientCreationOptions} from './lib/HttpClient';

export default class TokenPayAdapter extends BaseAdapter {
  private _installmentAdapter: InstallmentAdapter;
  private _onboardingAdapter: OnboardingAdapter;
  private _settlementReportingAdapter: SettlementReportingAdapter;
  private _paymentAdapter: PaymentAdapter;

  constructor(options: ClientCreationOptions) {
    super(options);
    this._installmentAdapter = new InstallmentAdapter(options);
    this._onboardingAdapter = new OnboardingAdapter(options);
    this._paymentAdapter = new PaymentAdapter(options);
    this._settlementReportingAdapter = new SettlementReportingAdapter(options);
  }

  installment(): InstallmentAdapter {
    return this._installmentAdapter;
  }

  onboarding(): OnboardingAdapter {
    return this._onboardingAdapter;
  }

  payment(): PaymentAdapter {
    return this._paymentAdapter;
  }

  settlementReporting(): SettlementReportingAdapter {
    return this._settlementReportingAdapter;
  }
}
