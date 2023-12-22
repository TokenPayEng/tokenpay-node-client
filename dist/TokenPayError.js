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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TokenPayError = /** @class */ (function (_super) {
    __extends(TokenPayError, _super);
    function TokenPayError(_a) {
        var errorCode = _a.errorCode, errorDescription = _a.errorDescription, rest = __rest(_a, ["errorCode", "errorDescription"]);
        var _this = _super.call(this, errorDescription) || this;
        _this._errorCode = errorCode;
        _this._errorDescription = errorDescription;
        _this._errorData = rest;
        Object.setPrototypeOf(_this, TokenPayError.prototype);
        return _this;
    }
    TokenPayError.prototype.getErrorCode = function () {
        return this._errorCode;
    };
    TokenPayError.prototype.getErrorDescription = function () {
        return this._errorDescription;
    };
    TokenPayError.prototype.getErrorData = function () {
        return this._errorData;
    };
    return TokenPayError;
}(Error));
exports.default = TokenPayError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5QYXlFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2tlblBheUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7SUFBMkMsaUNBQUs7SUFLOUMsdUJBQVksRUFBcUQ7UUFBcEQsSUFBQSxTQUFTLGVBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBSyxJQUFJLGNBQXJDLGlDQUFzQyxDQUFEO1FBQWpELFlBQ0Usa0JBQU0sZ0JBQWdCLENBQUMsU0FPeEI7UUFMQyxLQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFJLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUN2RCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMkNBQW1CLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTFCRCxDQUEyQyxLQUFLLEdBMEIvQyJ9