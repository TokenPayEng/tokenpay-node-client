import { HttpClient, ClientCreationOptions } from '../lib/HttpClient';
export default class BaseAdapter {
    protected _client: HttpClient;
    constructor(clientOptions: ClientCreationOptions);
}
