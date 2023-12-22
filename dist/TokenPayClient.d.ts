import BaseAdapter from './adapter/BaseAdapter';
import InstallmentAdapter from './adapter/InstallmentAdapter';
import OnboardingAdapter from './adapter/OnboardingAdapter';
import PaymentAdapter from './adapter/PaymentAdapter';
import SettlementReportingAdapter from './adapter/SettlementReportingAdapter';
import { ClientCreationOptions } from './lib/HttpClient';
import LinkAdapter from './adapter/LinkAdapter';
export default class TokenPayAdapter extends BaseAdapter {
    private _installmentAdapter;
    private _onboardingAdapter;
    private _settlementReportingAdapter;
    private _paymentAdapter;
    private _linkAdapter;
    constructor(options: ClientCreationOptions);
    installment(): InstallmentAdapter;
    onboarding(): OnboardingAdapter;
    payment(): PaymentAdapter;
    settlementReporting(): SettlementReportingAdapter;
    link(): LinkAdapter;
}
