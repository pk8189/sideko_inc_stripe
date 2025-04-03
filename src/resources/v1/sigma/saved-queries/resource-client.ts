import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/v1/sigma/saved-queries/request-types";
import { Schemas$SigmaSigmaApiQuery } from "@sideko-inc/stripe/types/sigma-sigma-api-query";
import { Schemas$V1SigmaSavedQueriesCreateBody } from "@sideko-inc/stripe/types/v1-sigma-saved-queries-create-body";

export class SavedQueriesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * <p>Update a previously saved Query object that can subsequently be marked for execution via Query Run.</p>
   *
   * POST /v1/sigma/saved_queries/{id}
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SigmaSigmaApiQuery> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/sigma/saved_queries/${request.id}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$V1SigmaSavedQueriesCreateBody.out.parse(request),
      responseSchema: Schemas$SigmaSigmaApiQuery.in,
      opts,
    });
  }
}
