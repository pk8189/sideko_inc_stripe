import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { LineItemsClient } from "@sideko-inc/stripe/resources/checkout/session/line-items";
import * as requests from "@sideko-inc/stripe/resources/checkout/session/request-types";
import { Schemas$CheckoutSession } from "@sideko-inc/stripe/types/checkout-session";
import { Schemas$CheckoutSessionCreateBody } from "@sideko-inc/stripe/types/checkout-session-create-body";
import { Schemas$CheckoutSessionExpireBody } from "@sideko-inc/stripe/types/checkout-session-expire-body";
import { Schemas$CheckoutSessionListCreatedObj0 } from "@sideko-inc/stripe/types/checkout-session-list-created-obj0";
import { Schemas$CheckoutSessionListCustomerDetails } from "@sideko-inc/stripe/types/checkout-session-list-customer-details";
import { Schemas$CheckoutSessionListResponse } from "@sideko-inc/stripe/types/checkout-session-list-response";
import { Schemas$CheckoutSessionUpdateBody } from "@sideko-inc/stripe/types/checkout-session-update-body";
import * as z from "zod";

export class SessionClient extends CoreResourceClient {
  lineItems: LineItemsClient;

  constructor(client: CoreClient) {
    super(client);

    this.lineItems = new LineItemsClient(this._client);
  }
  /**
   * Expire a Checkout Session
   *
   * <p>A Checkout Session can be expired when it is in one of these statuses: <code>open</code> </p>
   *
   * <p>After it expires, a customer can’t complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.</p>
   *
   * POST /v1/checkout/sessions/{session}/expire
   */
  expire(
    request: requests.ExpireRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSession> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/checkout/sessions/${request.session}/expire`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CheckoutSessionExpireBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$CheckoutSession.in),
      opts,
    });
  }
  /**
   * Update a Checkout Session
   *
   * <p>Updates a Checkout Session object.</p>
   *
   * POST /v1/checkout/sessions/{session}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSession> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/checkout/sessions/${request.session}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CheckoutSessionUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$CheckoutSession.in),
      opts,
    });
  }
  /**
   * Create a Checkout Session
   *
   * <p>Creates a Checkout Session object.</p>
   *
   * POST /v1/checkout/sessions
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSession> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/checkout/sessions",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CheckoutSessionCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$CheckoutSession.in),
      opts,
    });
  }
  /**
   * Retrieve a Checkout Session
   *
   * <p>Retrieves a Checkout Session object.</p>
   *
   * GET /v1/checkout/sessions/{session}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSession> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/checkout/sessions/${request.session}`,
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
      responseSchema: z.lazy(() => Schemas$CheckoutSession.in),
      opts,
    });
  }
  /**
   * List all Checkout Sessions
   *
   * <p>Returns a list of Checkout Sessions.</p>
   *
   * GET /v1/checkout/sessions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CheckoutSessionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/checkout/sessions",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$CheckoutSessionListCreatedObj0.out,
              z.number().int(),
            ])
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
          name: "customer_details",
          value: Schemas$CheckoutSessionListCustomerDetails.out
            .optional()
            .parse(request.customerDetails),
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
          name: "payment_intent",
          value: z.string().optional().parse(request.paymentIntent),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "payment_link",
          value: z.string().optional().parse(request.paymentLink),
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
            .enum(["complete", "expired", "open"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "subscription",
          value: z.string().optional().parse(request.subscription),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$CheckoutSessionListResponse.in),
      opts,
    });
  }
}
