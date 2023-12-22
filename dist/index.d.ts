import TokenPayClient from './TokenPayClient';
import TokenPayError from './TokenPayError';
declare const TokenPay: {
    Client: typeof TokenPayClient;
    Model: {
        ApprovalStatus: typeof import("./model/ApprovalStatus").default;
        CardAssociation: typeof import("./model/CardAssociation").default;
        CardType: typeof import("./model/CardType").default;
        CrossBookingTransactionStatus: typeof import("./model/CrossBookingTransactionStatus").default;
        Currency: typeof import("./model/Currency").default;
        MerchantType: typeof import("./model/MerchantType").default;
        PaymentGroup: typeof import("./model/PaymentGroup").default;
        PaymentPhase: typeof import("./model/PaymentPhase").default;
        PaymentStatus: typeof import("./model/PaymentStatus").default;
        PaymentType: typeof import("./model/PaymentType").default;
        RefundDestinationType: typeof import("./model/RefundDestinationType").default;
        RefundStatus: typeof import("./model/RefundStatus").default;
        RefundType: typeof import("./model/RefundType").default;
        SettlementType: typeof import("./model/SettlementType").default;
        Status: typeof import("./model/Status").default;
        SubMerchantType: typeof import("./model/SubMerchantType").default;
        TransactionStatus: typeof import("./model/TransactionStatus").default;
    };
    Adapter: {
        InstallmentAdapter: typeof import("./adapter/InstallmentAdapter").default;
        LinkAdapter: typeof import("./adapter/LinkAdapter").default;
        OnboardingAdapter: typeof import("./adapter/OnboardingAdapter").default;
        PaymentAdapter: typeof import("./adapter/PaymentAdapter").default;
        SettlementReportingAdapter: typeof import("./adapter/SettlementReportingAdapter").default;
    };
    TokenPayError: typeof TokenPayError;
};
export = TokenPay;
