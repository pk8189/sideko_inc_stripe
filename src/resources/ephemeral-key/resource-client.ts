import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/ephemeral-key/request-types";
import { Schemas$EphemeralKey } from "@sideko-inc/stripe/types/ephemeral-key";
import { Schemas$EphemeralKeyCreateBody } from "@sideko-inc/stripe/types/ephemeral-key-create-body";
import { Schemas$EphemeralKeyDeleteBody } from "@sideko-inc/stripe/types/ephemeral-key-delete-body";

export class EphemeralKeyClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create an ephemeral key
   *
   * <p>Creates a short-lived API key for a given resource.</p>
   *
   * POST /v1/ephemeral_keys
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.EphemeralKey> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/ephemeral_keys",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$EphemeralKeyCreateBody.out.parse(request),
      responseSchema: Schemas$EphemeralKey.in,
      opts,
    });
  }
  /**
   * Immediately invalidate an ephemeral key
   *
   * <p>Invalidates a short-lived API key for a given resource.</p>
   *
   * DELETE /v1/ephemeral_keys/{key}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EphemeralKey> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/ephemeral_keys/${request.key}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$EphemeralKeyDeleteBody.out.parse(request),
      responseSchema: Schemas$EphemeralKey.in,
      opts,
    });
  }
}
