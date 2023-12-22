"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAdapter_1 = __importDefault(require("./adapter/BaseAdapter"));
var InstallmentAdapter_1 = __importDefault(require("./adapter/InstallmentAdapter"));
var OnboardingAdapter_1 = __importDefault(require("./adapter/OnboardingAdapter"));
var PaymentAdapter_1 = __importDefault(require("./adapter/PaymentAdapter"));
var SettlementReportingAdapter_1 = __importDefault(require("./adapter/SettlementReportingAdapter"));
var LinkAdapter_1 = __importDefault(require("./adapter/LinkAdapter"));
var TokenPayAdapter = /** @class */ (function (_super) {
    __extends(TokenPayAdapter, _super);
    function TokenPayAdapter(options) {
        var _this = _super.call(this, options) || this;
        _this._installmentAdapter = new InstallmentAdapter_1.default(options);
        _this._onboardingAdapter = new OnboardingAdapter_1.default(options);
        _this._paymentAdapter = new PaymentAdapter_1.default(options);
        _this._settlementReportingAdapter = new SettlementReportingAdapter_1.default(options);
        _this._linkAdapter = new LinkAdapter_1.default(options);
        return _this;
    }
    TokenPayAdapter.prototype.installment = function () {
        return this._installmentAdapter;
    };
    TokenPayAdapter.prototype.onboarding = function () {
        return this._onboardingAdapter;
    };
    TokenPayAdapter.prototype.payment = function () {
        return this._paymentAdapter;
    };
    TokenPayAdapter.prototype.settlementReporting = function () {
        return this._settlementReportingAdapter;
    };
    TokenPayAdapter.prototype.link = function () {
        return this._linkAdapter;
    };
    return TokenPayAdapter;
}(BaseAdapter_1.default));
exports.default = TokenPayAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5QYXlDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVG9rZW5QYXlDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWdEO0FBQ2hELG9GQUE4RDtBQUM5RCxrRkFBNEQ7QUFDNUQsNEVBQXNEO0FBQ3RELG9HQUE4RTtBQUU5RSxzRUFBZ0Q7QUFFaEQ7SUFBNkMsbUNBQVc7SUFPdEQseUJBQVksT0FBOEI7UUFBMUMsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FNZjtRQUxDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLDRCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLDJCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx3QkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELEtBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLG9DQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQUMvQyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELDZDQUFtQixHQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFuQ0QsQ0FBNkMscUJBQVcsR0FtQ3ZEIn0=