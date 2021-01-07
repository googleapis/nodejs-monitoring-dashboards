// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import * as gax from 'google-gax';
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import * as path from 'path';

import {Transform} from 'stream';
import {RequestType} from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
/**
 * Client JSON configuration object, loaded from
 * `src/v1/dashboards_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './dashboards_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Manages Stackdriver dashboards. A dashboard is an arrangement of data display
 *  widgets in a specific layout.
 * @class
 * @memberof v1
 */
export class DashboardsServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  dashboardsServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of DashboardsServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof DashboardsServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback
        ? // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        : nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      dashboardPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/dashboards/{dashboard}'
      ),
      projectPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listDashboards: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'dashboards'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.monitoring.dashboard.v1.DashboardsService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.dashboardsServiceStub) {
      return this.dashboardsServiceStub;
    }

    // Put together the "service stub" for
    // google.monitoring.dashboard.v1.DashboardsService.
    this.dashboardsServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.monitoring.dashboard.v1.DashboardsService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.monitoring.dashboard.v1
            .DashboardsService,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const dashboardsServiceStubMethods = [
      'createDashboard',
      'listDashboards',
      'getDashboard',
      'deleteDashboard',
      'updateDashboard',
    ];
    for (const methodName of dashboardsServiceStubMethods) {
      const callPromise = this.dashboardsServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.dashboardsServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'monitoring.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'monitoring.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/monitoring',
      'https://www.googleapis.com/auth/monitoring.read',
      'https://www.googleapis.com/auth/monitoring.write',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  createDashboard(
    request: protos.google.monitoring.dashboard.v1.ICreateDashboardRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.monitoring.dashboard.v1.IDashboard,
      protos.google.monitoring.dashboard.v1.ICreateDashboardRequest | undefined,
      {} | undefined
    ]
  >;
  createDashboard(
    request: protos.google.monitoring.dashboard.v1.ICreateDashboardRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.ICreateDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  createDashboard(
    request: protos.google.monitoring.dashboard.v1.ICreateDashboardRequest,
    callback: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.ICreateDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Creates a new custom dashboard.
   *
   * This method requires the `monitoring.dashboards.create` permission
   * on the specified project. For more information, see
   * [Google Cloud IAM](https://cloud.google.com/iam).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project on which to execute the request. The format is:
   *
   *       projects/[PROJECT_ID_OR_NUMBER]
   *
   *   The `[PROJECT_ID_OR_NUMBER]` must match the dashboard resource name.
   * @param {google.monitoring.dashboard.v1.Dashboard} request.dashboard
   *   Required. The initial dashboard specification.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Dashboard]{@link google.monitoring.dashboard.v1.Dashboard}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.createDashboard(request);
   */
  createDashboard(
    request: protos.google.monitoring.dashboard.v1.ICreateDashboardRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.monitoring.dashboard.v1.IDashboard,
          | protos.google.monitoring.dashboard.v1.ICreateDashboardRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.ICreateDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.monitoring.dashboard.v1.IDashboard,
      protos.google.monitoring.dashboard.v1.ICreateDashboardRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.createDashboard(request, options, callback);
  }
  getDashboard(
    request: protos.google.monitoring.dashboard.v1.IGetDashboardRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.monitoring.dashboard.v1.IDashboard,
      protos.google.monitoring.dashboard.v1.IGetDashboardRequest | undefined,
      {} | undefined
    ]
  >;
  getDashboard(
    request: protos.google.monitoring.dashboard.v1.IGetDashboardRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.IGetDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  getDashboard(
    request: protos.google.monitoring.dashboard.v1.IGetDashboardRequest,
    callback: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.IGetDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Fetches a specific dashboard.
   *
   * This method requires the `monitoring.dashboards.get` permission
   * on the specified dashboard. For more information, see
   * [Google Cloud IAM](https://cloud.google.com/iam).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the Dashboard. The format is one of:
   *
   *    -  `dashboards/[DASHBOARD_ID]` (for system dashboards)
   *    -  `projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID]`
   *         (for custom dashboards).
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Dashboard]{@link google.monitoring.dashboard.v1.Dashboard}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.getDashboard(request);
   */
  getDashboard(
    request: protos.google.monitoring.dashboard.v1.IGetDashboardRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.monitoring.dashboard.v1.IDashboard,
          | protos.google.monitoring.dashboard.v1.IGetDashboardRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.IGetDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.monitoring.dashboard.v1.IDashboard,
      protos.google.monitoring.dashboard.v1.IGetDashboardRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getDashboard(request, options, callback);
  }
  deleteDashboard(
    request: protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest | undefined,
      {} | undefined
    ]
  >;
  deleteDashboard(
    request: protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  deleteDashboard(
    request: protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest,
    callback: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Deletes an existing custom dashboard.
   *
   * This method requires the `monitoring.dashboards.delete` permission
   * on the specified dashboard. For more information, see
   * [Google Cloud IAM](https://cloud.google.com/iam).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the Dashboard. The format is:
   *
   *       projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID]
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.deleteDashboard(request);
   */
  deleteDashboard(
    request: protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.protobuf.IEmpty,
          | protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.protobuf.IEmpty,
      | protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.protobuf.IEmpty,
      protos.google.monitoring.dashboard.v1.IDeleteDashboardRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deleteDashboard(request, options, callback);
  }
  updateDashboard(
    request: protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.monitoring.dashboard.v1.IDashboard,
      protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest | undefined,
      {} | undefined
    ]
  >;
  updateDashboard(
    request: protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  updateDashboard(
    request: protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest,
    callback: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Replaces an existing custom dashboard with a new definition.
   *
   * This method requires the `monitoring.dashboards.update` permission
   * on the specified dashboard. For more information, see
   * [Google Cloud IAM](https://cloud.google.com/iam).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {google.monitoring.dashboard.v1.Dashboard} request.dashboard
   *   Required. The dashboard that will replace the existing dashboard.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Dashboard]{@link google.monitoring.dashboard.v1.Dashboard}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.updateDashboard(request);
   */
  updateDashboard(
    request: protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.monitoring.dashboard.v1.IDashboard,
          | protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.monitoring.dashboard.v1.IDashboard,
      | protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.monitoring.dashboard.v1.IDashboard,
      protos.google.monitoring.dashboard.v1.IUpdateDashboardRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'dashboard.name': request.dashboard!.name || '',
    });
    this.initialize();
    return this.innerApiCalls.updateDashboard(request, options, callback);
  }

  listDashboards(
    request: protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.monitoring.dashboard.v1.IDashboard[],
      protos.google.monitoring.dashboard.v1.IListDashboardsRequest | null,
      protos.google.monitoring.dashboard.v1.IListDashboardsResponse
    ]
  >;
  listDashboards(
    request: protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
      | protos.google.monitoring.dashboard.v1.IListDashboardsResponse
      | null
      | undefined,
      protos.google.monitoring.dashboard.v1.IDashboard
    >
  ): void;
  listDashboards(
    request: protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
    callback: PaginationCallback<
      protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
      | protos.google.monitoring.dashboard.v1.IListDashboardsResponse
      | null
      | undefined,
      protos.google.monitoring.dashboard.v1.IDashboard
    >
  ): void;
  /**
   * Lists the existing dashboards.
   *
   * This method requires the `monitoring.dashboards.list` permission
   * on the specified project. For more information, see
   * [Google Cloud IAM](https://cloud.google.com/iam).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The scope of the dashboards to list. The format is:
   *
   *       projects/[PROJECT_ID_OR_NUMBER]
   * @param {number} request.pageSize
   *   A positive number that is the maximum number of results to return.
   *   If unspecified, a default of 1000 is used.
   * @param {string} request.pageToken
   *   If this field is not empty then it must contain the `nextPageToken` value
   *   returned by a previous call to this method.  Using this field causes the
   *   method to return additional results from the previous method call.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Dashboard]{@link google.monitoring.dashboard.v1.Dashboard}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `listDashboardsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listDashboards(
    request: protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
          | protos.google.monitoring.dashboard.v1.IListDashboardsResponse
          | null
          | undefined,
          protos.google.monitoring.dashboard.v1.IDashboard
        >,
    callback?: PaginationCallback<
      protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
      | protos.google.monitoring.dashboard.v1.IListDashboardsResponse
      | null
      | undefined,
      protos.google.monitoring.dashboard.v1.IDashboard
    >
  ): Promise<
    [
      protos.google.monitoring.dashboard.v1.IDashboard[],
      protos.google.monitoring.dashboard.v1.IListDashboardsRequest | null,
      protos.google.monitoring.dashboard.v1.IListDashboardsResponse
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.listDashboards(request, options, callback);
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The scope of the dashboards to list. The format is:
   *
   *       projects/[PROJECT_ID_OR_NUMBER]
   * @param {number} request.pageSize
   *   A positive number that is the maximum number of results to return.
   *   If unspecified, a default of 1000 is used.
   * @param {string} request.pageToken
   *   If this field is not empty then it must contain the `nextPageToken` value
   *   returned by a previous call to this method.  Using this field causes the
   *   method to return additional results from the previous method call.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Dashboard]{@link google.monitoring.dashboard.v1.Dashboard} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listDashboardsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  listDashboardsStream(
    request?: protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listDashboards.createStream(
      this.innerApiCalls.listDashboards as gax.GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `listDashboards`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The scope of the dashboards to list. The format is:
   *
   *       projects/[PROJECT_ID_OR_NUMBER]
   * @param {number} request.pageSize
   *   A positive number that is the maximum number of results to return.
   *   If unspecified, a default of 1000 is used.
   * @param {string} request.pageToken
   *   If this field is not empty then it must contain the `nextPageToken` value
   *   returned by a previous call to this method.  Using this field causes the
   *   method to return additional results from the previous method call.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [Dashboard]{@link google.monitoring.dashboard.v1.Dashboard}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * const iterable = client.listDashboardsAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   */
  listDashboardsAsync(
    request?: protos.google.monitoring.dashboard.v1.IListDashboardsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.monitoring.dashboard.v1.IDashboard> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    options = options || {};
    const callSettings = new gax.CallSettings(options);
    this.initialize();
    return this.descriptors.page.listDashboards.asyncIterate(
      this.innerApiCalls['listDashboards'] as GaxCall,
      (request as unknown) as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.monitoring.dashboard.v1.IDashboard>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified dashboard resource name string.
   *
   * @param {string} project
   * @param {string} dashboard
   * @returns {string} Resource name string.
   */
  dashboardPath(project: string, dashboard: string) {
    return this.pathTemplates.dashboardPathTemplate.render({
      project: project,
      dashboard: dashboard,
    });
  }

  /**
   * Parse the project from Dashboard resource.
   *
   * @param {string} dashboardName
   *   A fully-qualified path representing Dashboard resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromDashboardName(dashboardName: string) {
    return this.pathTemplates.dashboardPathTemplate.match(dashboardName)
      .project;
  }

  /**
   * Parse the dashboard from Dashboard resource.
   *
   * @param {string} dashboardName
   *   A fully-qualified path representing Dashboard resource.
   * @returns {string} A string representing the dashboard.
   */
  matchDashboardFromDashboardName(dashboardName: string) {
    return this.pathTemplates.dashboardPathTemplate.match(dashboardName)
      .dashboard;
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project: string) {
    return this.pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Parse the project from Project resource.
   *
   * @param {string} projectName
   *   A fully-qualified path representing Project resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectName(projectName: string) {
    return this.pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.dashboardsServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
