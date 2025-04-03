import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/promotion-code/request-types";
import { Schemas$PromotionCode } from "@sideko-inc/stripe/types/promotion-code";
import { Schemas$PromotionCodeCreateBody } from "@sideko-inc/stripe/types/promotion-code-create-body";
import { Schemas$PromotionCodeListCreatedObj0 } from "@sideko-inc/stripe/types/promotion-code-list-created-obj0";
import { Schemas$PromotionCodeListResponse } from "@sideko-inc/stripe/types/promotion-code-list-response";
import { Schemas$PromotionCodeUpdateBody } from "@sideko-inc/stripe/types/promotion-code-update-body";
import * as z from "zod";

export class PromotionCodeClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a promotion code
   *
   * <p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>
   *
   * POST /v1/promotion_codes/{promotion_code}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PromotionCode> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/promotion_codes/${request.promotionCode}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PromotionCodeUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$PromotionCode.in),
      opts,
    });
  }
  /**
   * Create a promotion code
   *
   * <p>A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>
   *
   * POST /v1/promotion_codes
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PromotionCode> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/promotion_codes",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PromotionCodeCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$PromotionCode.in),
      opts,
    });
  }
  /**
   * Retrieve a promotion code
   *
   * <p>Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing <code>code</code> use <a href="/docs/api/promotion_codes/list">list</a> with the desired <code>code</code>.</p>
   *
   * GET /v1/promotion_codes/{promotion_code}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PromotionCode> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/promotion_codes/${request.promotionCode}`,
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
      responseSchema: z.lazy(() => Schemas$PromotionCode.in),
      opts,
    });
  }
  /**
   * List all promotion codes
   *
   * <p>Returns a list of your promotion codes.</p>
   *
   * GET /v1/promotion_codes
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PromotionCodeListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/promotion_codes",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "active",
          value: z.boolean().optional().parse(request.active),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "code",
          value: z.string().optional().parse(request.code),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "coupon",
          value: z.string().optional().parse(request.coupon),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$PromotionCodeListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "customer",
          value: z.string().optional().parse(request.customer),
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
      responseSchema: z.lazy(() => Schemas$PromotionCodeListResponse.in),
      opts,
    });
  }
}
