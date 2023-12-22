"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeParams = exports.getEncodedStringValue = exports.isArray = exports.getAbsoluteUrl = exports.calculateSignature = exports.generateRandomString = void 0;
var crypto_js_1 = __importDefault(require("crypto-js"));
/**
 * Generates a random alphanumberic string of the given length.
 *
 * @param length (default: 6) the length of the string to generate
 */
function generateRandomString(length) {
    if (length === void 0) { length = 6; }
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return new Array(length)
        .fill(0)
        .map(function () { return Math.floor(Math.random() * alphabet.length); })
        .map(function (i) { return alphabet[i]; })
        .join('');
}
exports.generateRandomString = generateRandomString;
/**
 * Calculates the PKI signature using the provided set of components.
 *
 * @param components the components to calculate the signature from
 */
function calculateSignature(_a) {
    var apiKey = _a.apiKey, secretKey = _a.secretKey, url = _a.url, body = _a.body, randomStr = _a.randomStr;
    var hashStr = [url, apiKey, secretKey, randomStr, body].filter(function (s) { return !!s; }).join('');
    var hash = crypto_js_1.default.SHA256(hashStr);
    return crypto_js_1.default.enc.Base64.stringify(hash);
}
exports.calculateSignature = calculateSignature;
/**
 * Creates an absolute URL by combining a base URL with a relative part, preventing duplicate slashes from being produced.
 *
 * @param baseUrl the base URL
 * @param relativeUrl (optional) the relative part of the URL
 */
function getAbsoluteUrl(baseUrl, relativeUrl) {
    if (!relativeUrl) {
        return baseUrl;
    }
    return baseUrl.replace(/\/+$/g, '') + '/' + relativeUrl.replace(/^\/+/g, '');
}
exports.getAbsoluteUrl = getAbsoluteUrl;
/**
 * Returns whether or not the provided value is an array
 *
 * @param value the value
 */
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}
exports.isArray = isArray;
/**
 * Returns the URL-encoded string representation of a value. If the provided value is null or undefined, returns an empty string.
 *
 * @param value the value
 */
function getEncodedStringValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    if (value instanceof Date) {
        return encodeURIComponent(value.toISOString());
    }
    return encodeURIComponent(value);
}
exports.getEncodedStringValue = getEncodedStringValue;
/**
 * Serializes an object as a query string, using unbracketed keys for array values.
 *
 * @param params the params object
 */
function serializeParams(params) {
    return Object.keys(params)
        .reduce(function (acc, key) {
        var value = params[key];
        var encodedKey = encodeURIComponent(key);
        if (isArray(value)) {
            var stringValue_1 = value
                .map(getEncodedStringValue)
                .map(function (value) { return encodedKey + "=" + value; })
                .join('&');
            return acc.concat(stringValue_1);
        }
        var stringValue = getEncodedStringValue(value);
        return acc.concat(encodedKey + "=" + stringValue);
    }, [])
        .join('&');
}
exports.serializeParams = serializeParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUErQjtBQUUvQjs7OztHQUlHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUMsTUFBVTtJQUFWLHVCQUFBLEVBQUEsVUFBVTtJQUM3QyxJQUFNLFFBQVEsR0FBRyxnRUFBZ0UsQ0FBQztJQUNsRixPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ1AsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQTNDLENBQTJDLENBQUM7U0FDdEQsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFYLENBQVcsQ0FBQztTQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxDQUFDO0FBUEQsb0RBT0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsRUFBNkg7UUFBNUgsTUFBTSxZQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsR0FBRyxTQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsU0FBUyxlQUFBO0lBQ3pFLElBQU0sT0FBTyxHQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLElBQU0sSUFBSSxHQUFHLG1CQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sbUJBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSkQsZ0RBSUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxPQUFlLEVBQUUsV0FBb0I7SUFDbEUsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixPQUFPLE9BQU8sQ0FBQztLQUNoQjtJQUVELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9FLENBQUM7QUFORCx3Q0FNQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixPQUFPLENBQUMsS0FBVTtJQUNoQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztBQUNwRSxDQUFDO0FBRkQsMEJBRUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUMsS0FBVTtJQUM5QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ2xELE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7UUFDekIsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUNoRDtJQUVELE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQVZELHNEQVVDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLGVBQWUsQ0FBQyxNQUFXO0lBQ3pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdkIsTUFBTSxDQUFDLFVBQUMsR0FBa0IsRUFBRSxHQUFXO1FBQ3RDLElBQU0sS0FBSyxHQUFRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFNLGFBQVcsR0FBRyxLQUFLO2lCQUN0QixHQUFHLENBQUMscUJBQXFCLENBQUM7aUJBQzFCLEdBQUcsQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFHLFVBQVUsU0FBSSxLQUFPLEVBQXhCLENBQXdCLENBQUM7aUJBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUViLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFXLENBQUMsQ0FBQztTQUNoQztRQUVELElBQU0sV0FBVyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBSSxVQUFVLFNBQUksV0FBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUM7QUFuQkQsMENBbUJDIn0=