type ErrorResponse = {
  errorCode: string;
  errorDescription: string;
};

export default class TokenPayError extends Error {
  private _errorCode: string;
  private _errorDescription: string;
  private _errorData: any;

  constructor({errorCode, errorDescription, ...rest}: ErrorResponse) {
    super(errorDescription);

    this._errorCode = errorCode;
    this._errorDescription = errorDescription;
    this._errorData = rest;

    Object.setPrototypeOf(this, TokenPayError.prototype);
  }

  getErrorCode(): string {
    return this._errorCode;
  }

  getErrorDescription(): string {
    return this._errorDescription;
  }

  getErrorData(): any {
    return this._errorData;
  }
}
