import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { MandateNotificationsClient } from "@sideko-inc/stripe/resources/source/mandate-notifications";
import * as requests from "@sideko-inc/stripe/resources/source/request-types";
import { SourceTransactionsClient } from "@sideko-inc/stripe/resources/source/source-transactions";
import { Schemas$Source } from "@sideko-inc/stripe/types/source";
import { Schemas$SourceCreateBody } from "@sideko-inc/stripe/types/source-create-body";
import { Schemas$SourceUpdateBody } from "@sideko-inc/stripe/types/source-update-body";
import { Schemas$SourceVerifyBody } from "@sideko-inc/stripe/types/source-verify-body";
import * as z from "zod";

export class SourceClient extends CoreResourceClient {
  mandateNotifications: MandateNotificationsClient;
  sourceTransactions: SourceTransactionsClient;

  constructor(client: CoreClient) {
    super(client);

    this.mandateNotifications = new MandateNotificationsClient(this._client);
    this.sourceTransactions = new SourceTransactionsClient(this._client);
  }
  /**
   * <p>Verify a given source.</p>
   *
   * POST /v1/sources/{source}/verify
   */
  verify(
    request: requests.VerifyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/sources/${request.source}/verify`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SourceVerifyBody.out.parse(request),
      responseSchema: Schemas$Source.in,
      opts,
    });
  }
  /**
   * Update a source
   *
   * <p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * <p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>
   *
   * POST /v1/sources/{source}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/sources/${request.source}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SourceUpdateBody.out.parse(request),
      responseSchema: Schemas$Source.in,
      opts,
    });
  }
  /**
   * Shares a source
   *
   * <p>Creates a new source object.</p>
   *
   * POST /v1/sources
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/sources",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SourceCreateBody.out.parse(request),
      responseSchema: Schemas$Source.in,
      opts,
    });
  }
  /**
   * Retrieve a source
   *
   * <p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>
   *
   * GET /v1/sources/{source}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Source> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/sources/${request.source}`,
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "client_secret",
          value: z.string().optional().parse(request.clientSecret),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$Source.in,
      opts,
    });
  }
}
