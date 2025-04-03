import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/test-helper/confirmation-token/request-types";
import { Schemas$ConfirmationToken } from "@sideko-inc/stripe/types/confirmation-token";
import { Schemas$TestHelperConfirmationTokenCreateBody } from "@sideko-inc/stripe/types/test-helper-confirmation-token-create-body";
import * as z from "zod";

export class ConfirmationTokenClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a test Confirmation Token
   *
   * <p>Creates a test mode Confirmation Token server side for your integration tests.</p>
   *
   * POST /v1/test_helpers/confirmation_tokens
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.ConfirmationToken> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/test_helpers/confirmation_tokens",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TestHelperConfirmationTokenCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$ConfirmationToken.in),
      opts,
    });
  }
}
