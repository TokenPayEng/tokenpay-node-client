import {ClientCreationOptions} from '../lib/HttpClient';

import CreateLinkRequest from '../request/CreateLinkRequest';
import SearchLinkRequest from '../request/SearchLinksRequest';
import UpdateLinkRequest from '../request/UpdateLinkRequest';

import LinkListResponse from '../response/LinkListResponse';
import LinkResponse from '../response/LinkResponse';

import BaseAdapter from './BaseAdapter';

export default class LinkAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createLink(request: CreateLinkRequest): Promise<LinkResponse> {
    return this._client.post('/tokenlink/v1/products', request);
  }

  async updateLink(id: number, request: UpdateLinkRequest): Promise<LinkResponse> {
    return this._client.put(`/tokenlink/v1/products/${id}`, request);
  }

  async retrieveLink(id: number): Promise<LinkResponse> {
    return this._client.get(`/tokenlink/v1/products/${id}`);
  }

  async deleteLink(id: number): Promise<void> {
    await this._client.delete(`/tokenlink/v1/products/${id}`);
  }

  async searchLinks(request: SearchLinkRequest): Promise<LinkListResponse> {
    return this._client.get('/tokenlink/v1/products/', request);
  }
}
