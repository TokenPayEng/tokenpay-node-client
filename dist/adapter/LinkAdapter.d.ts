import { ClientCreationOptions } from '../lib/HttpClient';
import CreateLinkRequest from '../request/CreateLinkRequest';
import SearchLinkRequest from '../request/SearchLinksRequest';
import UpdateLinkRequest from '../request/UpdateLinkRequest';
import LinkListResponse from '../response/LinkListResponse';
import LinkResponse from '../response/LinkResponse';
import BaseAdapter from './BaseAdapter';
export default class LinkAdapter extends BaseAdapter {
    constructor(options: ClientCreationOptions);
    createLink(request: CreateLinkRequest): Promise<LinkResponse>;
    updateLink(id: number, request: UpdateLinkRequest): Promise<LinkResponse>;
    retrieveLink(id: number): Promise<LinkResponse>;
    searchLinks(request: SearchLinkRequest): Promise<LinkListResponse>;
}
