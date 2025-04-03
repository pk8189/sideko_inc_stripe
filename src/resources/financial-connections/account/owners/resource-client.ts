import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/financial-connections/account/owners/request-types";
import { Schemas$FinancialConnectionsAccountOwnersListResponse } from "@sideko-inc/stripe/types/financial-connections-account-owners-list-response";
import * as z from "zod";

export class OwnersClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * List Account Owners
   *
   * <p>Lists all owners for a given <code>Account</code></p>
   *
   * GET /v1/financial_connections/accounts/{account}/owners
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccountOwnersListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/financial_connections/accounts/${request.account}/owners`,
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "ownership",
          value: z.string().parse(request.ownership),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "ending_before",
          value: z.string().optional().parse(request.endingBefore),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "limit",
          value: z.number().int().optional().parse(request.limit),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "starting_after",
          value: z.string().optional().parse(request.startingAfter),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$FinancialConnectionsAccountOwnersListResponse.in,
      opts,
    });
  }
}
