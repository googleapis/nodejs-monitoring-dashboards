// Copyright 2022 Google LLC
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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as dashboardsserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.DashboardsServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      dashboardsserviceModule.v1.DashboardsServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      dashboardsserviceModule.v1.DashboardsServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = dashboardsserviceModule.v1.DashboardsServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new dashboardsserviceModule.v1.DashboardsServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.dashboardsServiceStub, undefined);
    await client.initialize();
    assert(client.dashboardsServiceStub);
  });

  it('has close method', () => {
    const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('createDashboard', () => {
    it('invokes createDashboard without error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.CreateDashboardRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.Dashboard()
      );
      client.innerApiCalls.createDashboard = stubSimpleCall(expectedResponse);
      const [response] = await client.createDashboard(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createDashboard without error using callback', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.CreateDashboardRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.Dashboard()
      );
      client.innerApiCalls.createDashboard =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createDashboard(
          request,
          (
            err?: Error | null,
            result?: protos.google.monitoring.dashboard.v1.IDashboard | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createDashboard with error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.CreateDashboardRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createDashboard = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createDashboard(request), expectedError);
      assert(
        (client.innerApiCalls.createDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('getDashboard', () => {
    it('invokes getDashboard without error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.GetDashboardRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.Dashboard()
      );
      client.innerApiCalls.getDashboard = stubSimpleCall(expectedResponse);
      const [response] = await client.getDashboard(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getDashboard without error using callback', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.GetDashboardRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.Dashboard()
      );
      client.innerApiCalls.getDashboard =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getDashboard(
          request,
          (
            err?: Error | null,
            result?: protos.google.monitoring.dashboard.v1.IDashboard | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getDashboard with error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.GetDashboardRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getDashboard = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getDashboard(request), expectedError);
      assert(
        (client.innerApiCalls.getDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('deleteDashboard', () => {
    it('invokes deleteDashboard without error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.DeleteDashboardRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteDashboard = stubSimpleCall(expectedResponse);
      const [response] = await client.deleteDashboard(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteDashboard without error using callback', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.DeleteDashboardRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteDashboard =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.deleteDashboard(
          request,
          (
            err?: Error | null,
            result?: protos.google.protobuf.IEmpty | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes deleteDashboard with error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.DeleteDashboardRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteDashboard = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.deleteDashboard(request), expectedError);
      assert(
        (client.innerApiCalls.deleteDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('updateDashboard', () => {
    it('invokes updateDashboard without error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.UpdateDashboardRequest()
      );
      request.dashboard = {};
      request.dashboard.name = '';
      const expectedHeaderRequestParams = 'dashboard.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.Dashboard()
      );
      client.innerApiCalls.updateDashboard = stubSimpleCall(expectedResponse);
      const [response] = await client.updateDashboard(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes updateDashboard without error using callback', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.UpdateDashboardRequest()
      );
      request.dashboard = {};
      request.dashboard.name = '';
      const expectedHeaderRequestParams = 'dashboard.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.Dashboard()
      );
      client.innerApiCalls.updateDashboard =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.updateDashboard(
          request,
          (
            err?: Error | null,
            result?: protos.google.monitoring.dashboard.v1.IDashboard | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes updateDashboard with error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.UpdateDashboardRequest()
      );
      request.dashboard = {};
      request.dashboard.name = '';
      const expectedHeaderRequestParams = 'dashboard.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.updateDashboard = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.updateDashboard(request), expectedError);
      assert(
        (client.innerApiCalls.updateDashboard as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('listDashboards', () => {
    it('invokes listDashboards without error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.ListDashboardsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
      ];
      client.innerApiCalls.listDashboards = stubSimpleCall(expectedResponse);
      const [response] = await client.listDashboards(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listDashboards as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listDashboards without error using callback', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.ListDashboardsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
      ];
      client.innerApiCalls.listDashboards =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listDashboards(
          request,
          (
            err?: Error | null,
            result?: protos.google.monitoring.dashboard.v1.IDashboard[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listDashboards as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listDashboards with error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.ListDashboardsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listDashboards = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listDashboards(request), expectedError);
      assert(
        (client.innerApiCalls.listDashboards as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listDashboardsStream without error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.ListDashboardsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
      ];
      client.descriptors.page.listDashboards.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listDashboardsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.monitoring.dashboard.v1.Dashboard[] = [];
        stream.on(
          'data',
          (response: protos.google.monitoring.dashboard.v1.Dashboard) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listDashboards.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listDashboards, request)
      );
      assert.strictEqual(
        (
          client.descriptors.page.listDashboards.createStream as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listDashboardsStream with error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.ListDashboardsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listDashboards.createStream =
        stubPageStreamingCall(undefined, expectedError);
      const stream = client.listDashboardsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.monitoring.dashboard.v1.Dashboard[] = [];
        stream.on(
          'data',
          (response: protos.google.monitoring.dashboard.v1.Dashboard) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listDashboards.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listDashboards, request)
      );
      assert.strictEqual(
        (
          client.descriptors.page.listDashboards.createStream as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listDashboards without error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.ListDashboardsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
        generateSampleMessage(
          new protos.google.monitoring.dashboard.v1.Dashboard()
        ),
      ];
      client.descriptors.page.listDashboards.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.monitoring.dashboard.v1.IDashboard[] = [];
      const iterable = client.listDashboardsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listDashboards.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.listDashboards.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listDashboards with error', async () => {
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.monitoring.dashboard.v1.ListDashboardsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listDashboards.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listDashboardsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.monitoring.dashboard.v1.IDashboard[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listDashboards.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.listDashboards.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('alertPolicy', () => {
      const fakePath = '/rendered/path/alertPolicy';
      const expectedParameters = {
        project: 'projectValue',
        alert_policy: 'alertPolicyValue',
      };
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.alertPolicyPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.alertPolicyPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('alertPolicyPath', () => {
        const result = client.alertPolicyPath(
          'projectValue',
          'alertPolicyValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.alertPolicyPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromAlertPolicyName', () => {
        const result = client.matchProjectFromAlertPolicyName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.alertPolicyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchAlertPolicyFromAlertPolicyName', () => {
        const result = client.matchAlertPolicyFromAlertPolicyName(fakePath);
        assert.strictEqual(result, 'alertPolicyValue');
        assert(
          (client.pathTemplates.alertPolicyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('dashboard', () => {
      const fakePath = '/rendered/path/dashboard';
      const expectedParameters = {
        project: 'projectValue',
        dashboard: 'dashboardValue',
      };
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.dashboardPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.dashboardPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('dashboardPath', () => {
        const result = client.dashboardPath('projectValue', 'dashboardValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.dashboardPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromDashboardName', () => {
        const result = client.matchProjectFromDashboardName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.dashboardPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDashboardFromDashboardName', () => {
        const result = client.matchDashboardFromDashboardName(fakePath);
        assert.strictEqual(result, 'dashboardValue');
        assert(
          (client.pathTemplates.dashboardPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('project', () => {
      const fakePath = '/rendered/path/project';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client = new dashboardsserviceModule.v1.DashboardsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPath', () => {
        const result = client.projectPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectName', () => {
        const result = client.matchProjectFromProjectName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
