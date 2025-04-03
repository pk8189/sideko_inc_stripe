import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/token/request-types";
import { Schemas$Token } from "@sideko-inc/stripe/types/token";
import { Schemas$TokenCreateBody } from "@sideko-inc/stripe/types/token-create-body";
import * as z from "zod";

export class TokenClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a CVC update token
   *
   * <p>Creates a single-use token that represents a bank account’s details.
   * You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a <a href="#accounts">connected account</a> where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a> is <code>application</code>, which includes Custom accounts.</p>
   *
   * POST /v1/tokens
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Token> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tokens",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TokenCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Token.in),
      opts,
    });
  }
  /**
   * Retrieve a token
   *
   * <p>Retrieves the token with the given ID.</p>
   *
   * GET /v1/tokens/{token}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Token> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tokens/${request.token}`,
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$Token.in),
      opts,
    });
  }
}
