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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAdapter_1 = __importDefault(require("./BaseAdapter"));
var PaymentAdapter = /** @class */ (function (_super) {
    __extends(PaymentAdapter, _super);
    function PaymentAdapter(options) {
        return _super.call(this, options) || this;
    }
    PaymentAdapter.prototype.createPayment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/card-payments', request)];
            });
        });
    };
    PaymentAdapter.prototype.retrievePayment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get("/payment-reporting/v1/payments/" + id)];
            });
        });
    };
    PaymentAdapter.prototype.searchPayments = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get('/payment-reporting/v1/payments', request)];
            });
        });
    };
    PaymentAdapter.prototype.approvePaymentTransactions = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/payment-transactions/approve', request)];
            });
        });
    };
    PaymentAdapter.prototype.disapprovePaymentTransactions = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/payment-transactions/disapprove', request)];
            });
        });
    };
    PaymentAdapter.prototype.updatePaymentTransaction = function (id, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.put("/payment/v1/payment-transactions/" + id, request)];
            });
        });
    };
    PaymentAdapter.prototype.init3DSPayment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/card-payments/3ds-init', request)];
            });
        });
    };
    PaymentAdapter.prototype.complete3DSPayment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/card-payments/3ds-complete', request)];
            });
        });
    };
    PaymentAdapter.prototype.initCheckoutPayment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/checkout-payments/init', request)];
            });
        });
    };
    PaymentAdapter.prototype.initCreditPayment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/credit-payments/init', request)];
            });
        });
    };
    PaymentAdapter.prototype.previewCreditPayment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/credit-payments/preview', request)];
            });
        });
    };
    PaymentAdapter.prototype.retrieveCheckoutPayment = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get("/payment/v1/checkout-payments/" + token)];
            });
        });
    };
    PaymentAdapter.prototype.refundPaymentTransaction = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/refund-transactions', request)];
            });
        });
    };
    PaymentAdapter.prototype.retrievePaymentTransactionRefund = function (refundTxId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get("/payment/v1/refund-transactions/" + refundTxId)];
            });
        });
    };
    PaymentAdapter.prototype.searchPaymentTransactionRefunds = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get('/payment/v1/refund-transactions', request)];
            });
        });
    };
    PaymentAdapter.prototype.refundPayment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/refunds', request)];
            });
        });
    };
    PaymentAdapter.prototype.retrievePaymentRefund = function (refundId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get("/payment/v1/refunds/" + refundId)];
            });
        });
    };
    PaymentAdapter.prototype.receiveMoney = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/cross-bookings/receive', request)];
            });
        });
    };
    PaymentAdapter.prototype.sendMoney = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/cross-bookings/send', request)];
            });
        });
    };
    PaymentAdapter.prototype.cancelCrossBooking = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/payment/v1/cross-bookings/cancel', request)];
            });
        });
    };
    PaymentAdapter.prototype.searchCrossBookings = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get('/payment/v1/cross-bookings', request)];
            });
        });
    };
    PaymentAdapter.prototype.deleteStoredCard = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.delete('/payment/v1/cards', request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentAdapter.prototype.searchStoredCards = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get('/payment/v1/cards', request)];
            });
        });
    };
    PaymentAdapter.prototype.postAuthPayment = function (paymentId, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post("/payment/v1/card-payments/" + paymentId + "/post-auth", request)];
            });
        });
    };
    PaymentAdapter.prototype.multiCardPostAuthPayment = function (conversationId, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post("/payment/v1/card-payments/" + conversationId + "/multi_post-auth", request)];
            });
        });
    };
    PaymentAdapter.prototype.moneyTransferPayment = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post("/payment/v1/money-transfers/code", request)];
            });
        });
    };
    return PaymentAdapter;
}(BaseAdapter_1.default));
exports.default = PaymentAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudEFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRhcHRlci9QYXltZW50QWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EsOERBQXdDO0FBSXhDO0lBQTRDLGtDQUFXO0lBQ3JELHdCQUFZLE9BQThCO2VBQ3hDLGtCQUFNLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRUssc0NBQWEsR0FBbkIsVUFBb0IsT0FBNkI7OztnQkFDL0Msc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLEVBQUM7OztLQUNoRTtJQUVLLHdDQUFlLEdBQXJCLFVBQXNCLEVBQVU7OztnQkFDOUIsc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQWtDLEVBQUksQ0FBQyxFQUFDOzs7S0FDakU7SUFFSyx1Q0FBYyxHQUFwQixVQUFxQixPQUE4Qjs7O2dCQUNqRCxzQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxPQUFPLENBQUMsRUFBQzs7O0tBQ3BFO0lBRUssbURBQTBCLEdBQWhDLFVBQWlDLE9BQTBDOzs7Z0JBQ3pFLHNCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxFQUFFLE9BQU8sQ0FBQyxFQUFDOzs7S0FDL0U7SUFFSyxzREFBNkIsR0FBbkMsVUFBb0MsT0FBNkM7OztnQkFDL0Usc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLEVBQUUsT0FBTyxDQUFDLEVBQUM7OztLQUNsRjtJQUVLLGlEQUF3QixHQUE5QixVQUErQixFQUFVLEVBQUUsT0FBd0M7OztnQkFDakYsc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQW9DLEVB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