declare type ErrorResponse = {
    errorCode: string;
    errorDescription: string;
};
export default class TokenPayError extends Error {
    private _errorCode;
    private _errorDescription;
    private _errorData;
    constructor({ errorCode, errorDescription, ...rest }: ErrorResponse);
    getErrorCode(): string;
    getErrorDescription(): string;
    getErrorData(): any;
}
export {};
