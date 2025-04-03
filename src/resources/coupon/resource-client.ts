import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/coupon/request-types";
import { Schemas$Coupon } from "@sideko-inc/stripe/types/coupon";
import { Schemas$CouponCreateBody } from "@sideko-inc/stripe/types/coupon-create-body";
import { Schemas$CouponListCreatedObj0 } from "@sideko-inc/stripe/types/coupon-list-created-obj0";
import { Schemas$CouponListResponse } from "@sideko-inc/stripe/types/coupon-list-response";
import { Schemas$CouponUpdateBody } from "@sideko-inc/stripe/types/coupon-update-body";
import { Schemas$DeletedCoupon } from "@sideko-inc/stripe/types/deleted-coupon";
import * as z from "zod";

export class CouponClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a coupon
   *
   * <p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>
   *
   * POST /v1/coupons/{coupon}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Coupon> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/coupons/${request.coupon}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CouponUpdateBody.out.parse(request),
      responseSchema: Schemas$Coupon.in,
      opts,
    });
  }
  /**
   * Create a coupon
   *
   * <p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>
   *
   * <p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>
   *
   * POST /v1/coupons
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Coupon> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/coupons",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CouponCreateBody.out.parse(request),
      responseSchema: Schemas$Coupon.in,
      opts,
    });
  }
  /**
   * Retrieve a coupon
   *
   * <p>Retrieves the coupon with the given ID.</p>
   *
   * GET /v1/coupons/{coupon}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Coupon> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/coupons/${request.coupon}`,
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
      responseSchema: Schemas$Coupon.in,
      opts,
    });
  }
  /**
   * List all coupons
   *
   * <p>Returns a list of your coupons.</p>
   *
   * GET /v1/coupons
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CouponListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/coupons",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$CouponListCreatedObj0.out, z.number().int()])
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
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$CouponListResponse.in,
      opts,
    });
  }
  /**
   * Delete a coupon
   *
   * <p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>
   *
   * DELETE /v1/coupons/{coupon}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedCoupon> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/coupons/${request.coupon}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$DeletedCoupon.in,
      opts,
    });
  }
}
