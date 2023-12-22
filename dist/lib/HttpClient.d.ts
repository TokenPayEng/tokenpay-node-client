import { AxiosRequestConfig } from 'axios';
export declare type ClientOptions = {
    apiKey: string;
    secretKey: string;
    baseUrl: string;
};
export declare type ClientCreationOptions = Partial<ClientOptions>;
export declare class HttpClient {
    private readonly _client;
    private readonly _options;
    constructor({ apiKey, secretKey, baseUrl }?: ClientCreationOptions);
    private _injectHeaders;
    private _executeRequest;
    /**
     * Attempts to handle any errors received from the API, throwing a {@link TokenPayError} if necessary
     *
     * @param response the response
     */
    private _handleBusinessErrors;
    get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T>;
}
