import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/shipping-rate/request-types";
import { Schemas$ShippingRate } from "@sideko-inc/stripe/types/shipping-rate";
import { Schemas$ShippingRateCreateBody } from "@sideko-inc/stripe/types/shipping-rate-create-body";
import { Schemas$ShippingRateListCreatedObj0 } from "@sideko-inc/stripe/types/shipping-rate-list-created-obj0";
import { Schemas$ShippingRateListResponse } from "@sideko-inc/stripe/types/shipping-rate-list-response";
import { Schemas$ShippingRateUpdateBody } from "@sideko-inc/stripe/types/shipping-rate-update-body";
import * as z from "zod";

export class ShippingRateClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a shipping rate
   *
   * <p>Updates an existing shipping rate object.</p>
   *
   * POST /v1/shipping_rates/{shipping_rate_token}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ShippingRate> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/shipping_rates/${request.shippingRateToken}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ShippingRateUpdateBody.out.parse(request),
      responseSchema: Schemas$ShippingRate.in,
      opts,
    });
  }
  /**
   * Create a shipping rate
   *
   * <p>Creates a new shipping rate object.</p>
   *
   * POST /v1/shipping_rates
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ShippingRate> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/shipping_rates",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ShippingRateCreateBody.out.parse(request),
      responseSchema: Schemas$ShippingRate.in,
      opts,
    });
  }
  /**
   * Retrieve a shipping rate
   *
   * <p>Returns the shipping rate object with the given ID.</p>
   *
   * GET /v1/shipping_rates/{shipping_rate_token}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ShippingRate> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/shipping_rates/${request.shippingRateToken}`,
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
      responseSchema: Schemas$ShippingRate.in,
      opts,
    });
  }
  /**
   * List all shipping rates
   *
   * <p>Returns a list of your shipping rates.</p>
   *
   * GET /v1/shipping_rates
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ShippingRateListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/shipping_rates",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "active",
          value: z.boolean().optional().parse(request.active),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$ShippingRateListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "currency",
          value: z.string().optional().parse(request.currency),
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
      responseSchema: Schemas$ShippingRateListResponse.in,
      opts,
    });
  }
}
