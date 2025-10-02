"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.HttpClient = void 0;
var axios_1 = __importDefault(require("axios"));
var TokenPayError_1 = __importDefault(require("../TokenPayError"));
var utils_1 = require("./utils");
var API_KEY_HEADER_NAME = 'x-api-key';
var RANDOM_HEADER_NAME = 'x-rnd-key';
var AUTH_VERSION_HEADER_NAME = 'x-auth-version';
var SIGNATURE_HEADER_NAME = 'x-signature';
var HttpClient = /** @class */ (function () {
    function HttpClient(_a) {
        var _b = _a === void 0 ? {} : _a, apiKey = _b.apiKey, secretKey = _b.secretKey, _c = _b.baseUrl, baseUrl = _c === void 0 ? 'https://api-gateway.oderopay.com.tr' : _c;
        this._options = { apiKey: apiKey, secretKey: secretKey, baseUrl: baseUrl };
        this._client = axios_1.default.create({ baseURL: baseUrl });
        this._client.interceptors.request.use(this._injectHeaders.bind(this));
    }
    HttpClient.prototype._injectHeaders = function (config) {
        var randomStr = utils_1.generateRandomString();
        config.headers[API_KEY_HEADER_NAME] = this._options.apiKey;
        config.headers[RANDOM_HEADER_NAME] = randomStr;
        config.headers[AUTH_VERSION_HEADER_NAME] = '1';
        config.maxRedirects = 0;
        var requestBody = config.data ? JSON.stringify(config.data, null, 0) : null;
        if (!config.paramsSerializer) {
            config.paramsSerializer = utils_1.serializeParams;
        }
        var fullUrl = utils_1.getAbsoluteUrl(this._options.baseUrl, decodeURIComponent(this._client.getUri(config)));
        var signature = utils_1.calculateSignature({
            apiKey: this._options.apiKey,
            secretKey: this._options.secretKey,
            randomStr: randomStr,
            url: fullUrl,
            body: requestBody
        });
        config.headers[SIGNATURE_HEADER_NAME] = signature;
        config.headers['Content-Type'] = 'application/json';
        config.data = requestBody;
        return config;
    };
    HttpClient.prototype._executeRequest = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client(config)];
                    case 1:
                        response = _a.sent();
                        this._handleBusinessErrors(response);
                        return [2 /*return*/, response.data.data];
                    case 2:
                        err_1 = _a.sent();
                        if (err_1 && err_1.response) {
                            this._handleBusinessErrors(err_1.response);
                        }
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Attempts to handle any errors received from the API, throwing a {@link TokenPayError} if necessary
     *
     * @param response the response
     */
    HttpClient.prototype._handleBusinessErrors = function (response) {
        if (!response || !response.data || !response.data.errors) {
            return;
        }
        throw new TokenPayError_1.default(response.data.errors);
    };
    HttpClient.prototype.get = function (url, params, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._executeRequest(__assign({ url: url,
                        params: params, method: 'GET' }, config))];
            });
        });
    };
    HttpClient.prototype.put = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._executeRequest(__assign({ url: url,
                        data: data, method: 'PUT' }, config))];
            });
        });
    };
    HttpClient.prototype.post = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._executeRequest(__assign({ url: url,
                        data: data, method: 'POST' }, config))];
            });
        });
    };
    HttpClient.prototype.delete = function (url, params, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._executeRequest(__assign({ url: url,
                        params: params, method: 'DELETE' }, config))];
            });
        });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvSHR0cENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4RTtBQUU5RSxtRUFBNkM7QUFFN0MsaUNBQWtHO0FBVWxHLElBQU0sbUJBQW1CLEdBQUcsV0FBVyxDQUFDO0FBQ3hDLElBQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDO0FBQ3ZDLElBQU0sd0JBQXdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDbEQsSUFBTSxxQkFBcUIsR0FBRyxhQUFhLENBQUM7QUFFNUM7SUFJRSxvQkFBWSxFQUFnRztZQUFoRyxxQkFBOEYsRUFBRSxLQUFBLEVBQS9GLE1BQU0sWUFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLGVBQStDLEVBQS9DLE9BQU8sbUJBQUcscUNBQXFDLEtBQUE7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLE1BQU0sUUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTyxtQ0FBYyxHQUF0QixVQUF1QixNQUEwQjtRQUMvQyxJQUFNLFNBQVMsR0FBVyw0QkFBb0IsRUFBRSxDQUFDO1FBRWpELE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMzRCxNQUFNLENBQUMsT0FBTyxD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