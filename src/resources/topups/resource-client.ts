import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/topups/request-types";
import { Schemas$Topup } from "@sideko-inc/stripe/types/topup";
import { Schemas$TopupsCancelBody } from "@sideko-inc/stripe/types/topups-cancel-body";
import { Schemas$TopupsCreateBody } from "@sideko-inc/stripe/types/topups-create-body";
import { Schemas$TopupsListAmountObj0 } from "@sideko-inc/stripe/types/topups-list-amount-obj0";
import { Schemas$TopupsListCreatedObj0 } from "@sideko-inc/stripe/types/topups-list-created-obj0";
import { Schemas$TopupsListResponse } from "@sideko-inc/stripe/types/topups-list-response";
import { Schemas$TopupsUpdateBody } from "@sideko-inc/stripe/types/topups-update-body";
import * as z from "zod";

export class TopupsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Cancel a top-up
   *
   * <p>Cancels a top-up. Only pending top-ups can be canceled.</p>
   *
   * POST /v1/topups/{topup}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Topup> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/topups/${request.topup}/cancel`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TopupsCancelBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Topup.in),
      opts,
    });
  }
  /**
   * Update a top-up
   *
   * <p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>
   *
   * POST /v1/topups/{topup}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Topup> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/topups/${request.topup}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TopupsUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Topup.in),
      opts,
    });
  }
  /**
   * Create a top-up
   *
   * <p>Top up the balance of an account</p>
   *
   * POST /v1/topups
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Topup> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/topups",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TopupsCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Topup.in),
      opts,
    });
  }
  /**
   * Retrieve a top-up
   *
   * <p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>
   *
   * GET /v1/topups/{topup}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Topup> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/topups/${request.topup}`,
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
      responseSchema: z.lazy(() => Schemas$Topup.in),
      opts,
    });
  }
  /**
   * List all top-ups
   *
   * <p>Returns a list of top-ups.</p>
   *
   * GET /v1/topups
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TopupsListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/topups",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "amount",
          value: z
            .union([Schemas$TopupsListAmountObj0.out, z.number().int()])
            .optional()
            .parse(request.amount),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$TopupsListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
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
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["canceled", "failed", "pending", "succeeded"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$TopupsListResponse.in),
      opts,
    });
  }
}
