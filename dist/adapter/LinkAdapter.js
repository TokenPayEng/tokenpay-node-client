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
var LinkAdapter = /** @class */ (function (_super) {
    __extends(LinkAdapter, _super);
    function LinkAdapter(options) {
        return _super.call(this, options) || this;
    }
    LinkAdapter.prototype.createLink = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.post('/tokenlink/v1/products', request)];
            });
        });
    };
    LinkAdapter.prototype.updateLink = function (id, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.put("/tokenlink/v1/products/" + id, request)];
            });
        });
    };
    LinkAdapter.prototype.retrieveLink = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get("/tokenlink/v1/products/" + id)];
            });
        });
    };
    LinkAdapter.prototype.searchLinks = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.get('/tokenlink/v1/products/', request)];
            });
        });
    };
    return LinkAdapter;
}(BaseAdapter_1.default));
exports.default = LinkAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua0FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRhcHRlci9MaW5rQWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSw4REFBd0M7QUFFeEM7SUFBeUMsK0JBQVc7SUFDbEQscUJBQVksT0FBOEI7ZUFDeEMsa0JBQU0sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFFSyxnQ0FBVSxHQUFoQixVQUFpQixPQUEwQjs7O2dCQUN6QyxzQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsRUFBQzs7O0tBQzdEO0lBRUssZ0NBQVUsR0FBaEIsVUFBaUIsRUFBVSxFQUFFLE9BQTBCOzs7Z0JBQ3JELHNCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUEwQixFQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUM7OztLQUNsRTtJQUVLLGtDQUFZLEdBQWxCLFVBQW1CLEVBQVU7OztnQkFDM0Isc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTBCLEVBQUksQ0FBQyxFQUFDOzs7S0FDekQ7SUFFSyxpQ0FBVyxHQUFqQixVQUFrQixPQUEwQjs7O2dCQUMxQyxzQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLENBQUMsRUFBQzs7O0tBQzdEO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBcEJELENBQXlDLHFCQUFXLEdBb0JuRCJ9