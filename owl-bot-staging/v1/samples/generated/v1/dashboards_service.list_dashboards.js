// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START monitoring_v1_generated_DashboardsService_ListDashboards_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The scope of the dashboards to list. The format is:
   *      projects/[PROJECT_ID_OR_NUMBER]
   */
  // const parent = 'abc123'
  /**
   *  A positive number that is the maximum number of results to return.
   *  If unspecified, a default of 1000 is used.
   */
  // const pageSize = 1234
  /**
   *  If this field is not empty then it must contain the `nextPageToken` value
   *  returned by a previous call to this method.  Using this field causes the
   *  method to return additional results from the previous method call.
   */
  // const pageToken = 'abc123'

  // Imports the Dashboard library
  const {DashboardsServiceClient} = require('@google-cloud/monitoring-dashboards').v1;

  // Instantiates a client
  const dashboardClient = new DashboardsServiceClient();

  async function listDashboards() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dashboardClient.listDashboardsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listDashboards();
  // [END monitoring_v1_generated_DashboardsService_ListDashboards_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
