/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace domainsrdap_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Domains RDAP API
   *
   * Read-only public API that lets users search for information about domain names.
   *
   * @example
   * const {google} = require('googleapis');
   * const domainsrdap = google.domainsrdap('v1');
   *
   * @namespace domainsrdap
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Domainsrdap
   */
  export class Domainsrdap {
    context: APIRequestContext;
    autnum: Resource$Autnum;
    domain: Resource$Domain;
    entity: Resource$Entity;
    ip: Resource$Ip;
    nameserver: Resource$Nameserver;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.autnum = new Resource$Autnum(this.context);
      this.domain = new Resource$Domain(this.context);
      this.entity = new Resource$Entity(this.context);
      this.ip = new Resource$Ip(this.context);
      this.nameserver = new Resource$Nameserver(this.context);
      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can&#39;t be represented as JSON, such as raw binary or an HTML page.   This message can be used both in streaming and non-streaming API methods in the request as well as the response.  It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.  Example:      message GetResourceRequest {       // A unique request id.       string request_id = 1;        // The raw HTTP body is bound to this field.       google.api.HttpBody http_body = 2;     }      service ResourceService {       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);       rpc UpdateResource(google.api.HttpBody) returns       (google.protobuf.Empty);     }  Example with streaming methods:      service CaldavService {       rpc GetCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);       rpc UpdateCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);     }  Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}>;
  }
  /**
   * Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).
   */
  export interface Schema$Link {
    /**
     * Target URL of a link. Example: &quot;http://example.com/previous&quot;.
     */
    href?: string;
    /**
     * Language code of a link. Example: &quot;en&quot;.
     */
    hreflang?: string;
    /**
     * Media type of the link destination. Example: &quot;screen&quot;.
     */
    media?: string;
    /**
     * Relation type of a link. Example: &quot;previous&quot;.
     */
    rel?: string;
    /**
     * Title of this link. Example: &quot;title&quot;.
     */
    title?: string;
    /**
     * Content type of the link. Example: &quot;application/json&quot;.
     */
    type?: string;
    /**
     * URL giving context for the link. Example: &quot;http://example.com/current&quot;.
     */
    value?: string;
  }
  /**
   * Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).
   */
  export interface Schema$Notice {
    /**
     * Description of the notice.
     */
    description?: string[];
    /**
     * Link to a document containing more information.
     */
    links?: Schema$Link[];
    /**
     * Title of a notice. Example: &quot;Terms of Service&quot;.
     */
    title?: string;
    /**
     * Type values defined in [section 10.2.1 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-10.2.1) specific to a whole response: &quot;result set truncated due to authorization&quot;, &quot;result set truncated due to excessive load&quot;, &quot;result set truncated due to unexplainable reasons&quot;.
     */
    type?: string;
  }
  /**
   * Response to a general RDAP query.
   */
  export interface Schema$RdapResponse {
    /**
     * Error description.
     */
    description?: string[];
    /**
     * Error HTTP code. Example: &quot;501&quot;.
     */
    errorCode?: number;
    /**
     * HTTP response with content type set to &quot;application/json+rdap&quot;.
     */
    jsonResponse?: Schema$HttpBody;
    /**
     * Error language code. Error response info fields are defined in [section 6 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-6).
     */
    lang?: string;
    /**
     * Notices applying to this response.
     */
    notices?: Schema$Notice[];
    /**
     * RDAP conformance level.
     */
    rdapConformance?: string[];
    /**
     * Error title.
     */
    title?: string;
  }

  export class Resource$Autnum {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * domainsrdap.autnum.get
     * @desc The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     * @alias domainsrdap.autnum.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.autnumId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Autnum$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RdapResponse>;
    get(
      params: Params$Resource$Autnum$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RdapResponse>,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    get(
      params: Params$Resource$Autnum$Get,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    get(callback: BodyResponseCallback<Schema$RdapResponse>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Autnum$Get
        | BodyResponseCallback<Schema$RdapResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RdapResponse>,
      callback?: BodyResponseCallback<Schema$RdapResponse>
    ): void | GaxiosPromise<Schema$RdapResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Autnum$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Autnum$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/autnum/{autnumId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['autnumId'],
        pathParams: ['autnumId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RdapResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RdapResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Autnum$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    autnumId?: string;
  }

  export class Resource$Domain {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * domainsrdap.domain.get
     * @desc Look up RDAP information for a domain by name.
     * @alias domainsrdap.domain.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.domainName Full domain name to look up. Example: "example.com"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Domain$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    get(
      params: Params$Resource$Domain$Get,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    get(
      params: Params$Resource$Domain$Get,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    get(callback: BodyResponseCallback<Schema$HttpBody>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Domain$Get
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as Params$Resource$Domain$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Domain$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/domain/{+domainName}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['domainName'],
        pathParams: ['domainName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Domain$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Full domain name to look up. Example: "example.com"
     */
    domainName?: string;
  }

  export class Resource$Entity {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * domainsrdap.entity.get
     * @desc The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     * @alias domainsrdap.entity.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.entityId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Entity$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RdapResponse>;
    get(
      params: Params$Resource$Entity$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RdapResponse>,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    get(
      params: Params$Resource$Entity$Get,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    get(callback: BodyResponseCallback<Schema$RdapResponse>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Entity$Get
        | BodyResponseCallback<Schema$RdapResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RdapResponse>,
      callback?: BodyResponseCallback<Schema$RdapResponse>
    ): void | GaxiosPromise<Schema$RdapResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Entity$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Entity$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/entity/{entityId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['entityId'],
        pathParams: ['entityId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RdapResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RdapResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Entity$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    entityId?: string;
  }

  export class Resource$Ip {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * domainsrdap.ip.get
     * @desc The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     * @alias domainsrdap.ip.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.ipId
     * @param {string} params.ipId1
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Ip$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RdapResponse>;
    get(
      params: Params$Resource$Ip$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RdapResponse>,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    get(
      params: Params$Resource$Ip$Get,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    get(callback: BodyResponseCallback<Schema$RdapResponse>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Ip$Get
        | BodyResponseCallback<Schema$RdapResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RdapResponse>,
      callback?: BodyResponseCallback<Schema$RdapResponse>
    ): void | GaxiosPromise<Schema$RdapResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ip$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ip$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/ip/{ipId}/{ipId1}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['ipId', 'ipId1'],
        pathParams: ['ipId', 'ipId1'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RdapResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RdapResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Ip$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    ipId?: string;
    /**
     *
     */
    ipId1?: string;
  }

  export class Resource$Nameserver {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * domainsrdap.nameserver.get
     * @desc The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     * @alias domainsrdap.nameserver.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.nameserverId
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Nameserver$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RdapResponse>;
    get(
      params: Params$Resource$Nameserver$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RdapResponse>,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    get(
      params: Params$Resource$Nameserver$Get,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    get(callback: BodyResponseCallback<Schema$RdapResponse>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Nameserver$Get
        | BodyResponseCallback<Schema$RdapResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RdapResponse>,
      callback?: BodyResponseCallback<Schema$RdapResponse>
    ): void | GaxiosPromise<Schema$RdapResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Nameserver$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Nameserver$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/nameserver/{nameserverId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['nameserverId'],
        pathParams: ['nameserverId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RdapResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RdapResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Nameserver$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     *
     */
    nameserverId?: string;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * domainsrdap.getDomains
     * @desc The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     * @alias domainsrdap.getDomains
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getDomains(
      params?: Params$Resource$V1$Getdomains,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RdapResponse>;
    getDomains(
      params: Params$Resource$V1$Getdomains,
      options: MethodOptions | BodyResponseCallback<Schema$RdapResponse>,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    getDomains(
      params: Params$Resource$V1$Getdomains,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    getDomains(callback: BodyResponseCallback<Schema$RdapResponse>): void;
    getDomains(
      paramsOrCallback?:
        | Params$Resource$V1$Getdomains
        | BodyResponseCallback<Schema$RdapResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RdapResponse>,
      callback?: BodyResponseCallback<Schema$RdapResponse>
    ): void | GaxiosPromise<Schema$RdapResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Getdomains;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Getdomains;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/domains').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RdapResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RdapResponse>(parameters);
      }
    }

    /**
     * domainsrdap.getEntities
     * @desc The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     * @alias domainsrdap.getEntities
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEntities(
      params?: Params$Resource$V1$Getentities,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RdapResponse>;
    getEntities(
      params: Params$Resource$V1$Getentities,
      options: MethodOptions | BodyResponseCallback<Schema$RdapResponse>,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    getEntities(
      params: Params$Resource$V1$Getentities,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    getEntities(callback: BodyResponseCallback<Schema$RdapResponse>): void;
    getEntities(
      paramsOrCallback?:
        | Params$Resource$V1$Getentities
        | BodyResponseCallback<Schema$RdapResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RdapResponse>,
      callback?: BodyResponseCallback<Schema$RdapResponse>
    ): void | GaxiosPromise<Schema$RdapResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Getentities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Getentities;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/entities').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RdapResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RdapResponse>(parameters);
      }
    }

    /**
     * domainsrdap.getHelp
     * @desc Get help information for the RDAP API, including links to documentation.
     * @alias domainsrdap.getHelp
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getHelp(
      params?: Params$Resource$V1$Gethelp,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    getHelp(
      params: Params$Resource$V1$Gethelp,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getHelp(
      params: Params$Resource$V1$Gethelp,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getHelp(callback: BodyResponseCallback<Schema$HttpBody>): void;
    getHelp(
      paramsOrCallback?:
        | Params$Resource$V1$Gethelp
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Gethelp;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Gethelp;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/help').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * domainsrdap.getIp
     * @desc The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     * @alias domainsrdap.getIp
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIp(
      params?: Params$Resource$V1$Getip,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HttpBody>;
    getIp(
      params: Params$Resource$V1$Getip,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getIp(
      params: Params$Resource$V1$Getip,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getIp(callback: BodyResponseCallback<Schema$HttpBody>): void;
    getIp(
      paramsOrCallback?:
        | Params$Resource$V1$Getip
        | BodyResponseCallback<Schema$HttpBody>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback?: BodyResponseCallback<Schema$HttpBody>
    ): void | GaxiosPromise<Schema$HttpBody> {
      let params = (paramsOrCallback || {}) as Params$Resource$V1$Getip;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Getip;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/ip').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$HttpBody>(parameters, callback);
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * domainsrdap.getNameservers
     * @desc The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.
     * @alias domainsrdap.getNameservers
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getNameservers(
      params?: Params$Resource$V1$Getnameservers,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RdapResponse>;
    getNameservers(
      params: Params$Resource$V1$Getnameservers,
      options: MethodOptions | BodyResponseCallback<Schema$RdapResponse>,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    getNameservers(
      params: Params$Resource$V1$Getnameservers,
      callback: BodyResponseCallback<Schema$RdapResponse>
    ): void;
    getNameservers(callback: BodyResponseCallback<Schema$RdapResponse>): void;
    getNameservers(
      paramsOrCallback?:
        | Params$Resource$V1$Getnameservers
        | BodyResponseCallback<Schema$RdapResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RdapResponse>,
      callback?: BodyResponseCallback<Schema$RdapResponse>
    ): void | GaxiosPromise<Schema$RdapResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Getnameservers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Getnameservers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://domainsrdap.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/nameservers').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RdapResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RdapResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$V1$Getdomains extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$V1$Getentities extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$V1$Gethelp extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$V1$Getip extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
  export interface Params$Resource$V1$Getnameservers
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }
}