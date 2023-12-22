/**
 * Generates a random alphanumberic string of the given length.
 *
 * @param length (default: 6) the length of the string to generate
 */
export declare function generateRandomString(length?: number): string;
/**
 * Calculates the PKI signature using the provided set of components.
 *
 * @param components the components to calculate the signature from
 */
export declare function calculateSignature({ apiKey, secretKey, url, body, randomStr }: {
    apiKey: string;
    secretKey: string;
    url: string;
    randomStr: string;
    body?: string;
}): string;
/**
 * Creates an absolute URL by combining a base URL with a relative part, preventing duplicate slashes from being produced.
 *
 * @param baseUrl the base URL
 * @param relativeUrl (optional) the relative part of the URL
 */
export declare function getAbsoluteUrl(baseUrl: string, relativeUrl?: string): string;
/**
 * Returns whether or not the provided value is an array
 *
 * @param value the value
 */
export declare function isArray(value: any): boolean;
/**
 * Returns the URL-encoded string representation of a value. If the provided value is null or undefined, returns an empty string.
 *
 * @param value the value
 */
export declare function getEncodedStringValue(value: any): string;
/**
 * Serializes an object as a query string, using unbracketed keys for array values.
 *
 * @param params the params object
 */
export declare function serializeParams(params: any): string;
