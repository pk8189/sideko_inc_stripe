import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payment-link/request-types";
import { Schemas$PaymentLink } from "@sideko-inc/stripe/types/payment-link";
import { Schemas$PaymentLinkCreateBody } from "@sideko-inc/stripe/types/payment-link-create-body";
import { Schemas$PaymentLinkListResponse } from "@sideko-inc/stripe/types/payment-link-list-response";
import { Schemas$PaymentLinkUpdateBody } from "@sideko-inc/stripe/types/payment-link-update-body";
import * as z from "zod";

export class PaymentLinkClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a payment link
   *
   * <p>Updates a payment link.</p>
   *
   * POST /v1/payment_links/{payment_link}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentLink> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_links/${request.paymentLink}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentLinkUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$PaymentLink.in),
      opts,
    });
  }
  /**
   * Create a payment link
   *
   * <p>Creates a payment link.</p>
   *
   * POST /v1/payment_links
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentLink> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payment_links",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentLinkCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$PaymentLink.in),
      opts,
    });
  }
  /**
   * Retrieve payment link
   *
   * <p>Retrieve a payment link.</p>
   *
   * GET /v1/payment_links/{payment_link}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentLink> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payment_links/${request.paymentLink}`,
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
      responseSchema: z.lazy(() => Schemas$PaymentLink.in),
      opts,
    });
  }
  /**
   * List all payment links
   *
   * <p>Returns a list of your payment links.</p>
   *
   * GET /v1/payment_links
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentLinkListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_links",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "active",
          value: z.boolean().optional().parse(request.active),
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
      responseSchema: z.lazy(() => Schemas$PaymentLinkListResponse.in),
      opts,
    });
  }
}
