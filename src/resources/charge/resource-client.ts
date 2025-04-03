import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { DisputeClient } from "@sideko-inc/stripe/resources/charge/dispute";
import { RefundClient } from "@sideko-inc/stripe/resources/charge/refund";
import * as requests from "@sideko-inc/stripe/resources/charge/request-types";
import { Schemas$Charge } from "@sideko-inc/stripe/types/charge";
import { Schemas$ChargeCaptureBody } from "@sideko-inc/stripe/types/charge-capture-body";
import { Schemas$ChargeCreateBody } from "@sideko-inc/stripe/types/charge-create-body";
import { Schemas$ChargeListCreatedObj0 } from "@sideko-inc/stripe/types/charge-list-created-obj0";
import { Schemas$ChargeListResponse } from "@sideko-inc/stripe/types/charge-list-response";
import { Schemas$ChargeSearchResponse } from "@sideko-inc/stripe/types/charge-search-response";
import { Schemas$ChargeUpdateBody } from "@sideko-inc/stripe/types/charge-update-body";
import * as z from "zod";

export class ChargeClient extends CoreResourceClient {
  dispute: DisputeClient;
  refund: RefundClient;

  constructor(client: CoreClient) {
    super(client);

    this.dispute = new DisputeClient(this._client);
    this.refund = new RefundClient(this._client);
  }
  /**
   * Capture a payment
   *
   * <p>Capture the payment of an existing, uncaptured charge that was created with the <code>capture</code> option set to false.</p>
   *
   * <p>Uncaptured payments expire a set number of days after they are created (<a href="/docs/charges/placing-a-hold">7 by default</a>), after which they are marked as refunded and capture attempts will fail.</p>
   *
   * <p>Don’t use this method to capture a PaymentIntent-initiated charge. Use <a href="/docs/api/payment_intents/capture">Capture a PaymentIntent</a>.</p>
   *
   * POST /v1/charges/{charge}/capture
   */
  capture(
    request: requests.CaptureRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}/capture`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ChargeCaptureBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Charge.in),
      opts,
    });
  }
  /**
   * Update a charge
   *
   * <p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/charges/{charge}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/charges/${request.charge}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ChargeUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Charge.in),
      opts,
    });
  }
  /**
   * <p>This method is no longer recommended—use the <a href="/docs/api/payment_intents">Payment Intents API</a>
   * to initiate a new payment instead. Confirmation of the PaymentIntent creates the <code>Charge</code>
   * object used to request payment.</p>
   *
   * POST /v1/charges
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/charges",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ChargeCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Charge.in),
      opts,
    });
  }
  /**
   * Retrieve a charge
   *
   * <p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>
   *
   * GET /v1/charges/{charge}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Charge> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/charges/${request.charge}`,
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
      responseSchema: z.lazy(() => Schemas$Charge.in),
      opts,
    });
  }
  /**
   * Search charges
   *
   * <p>Search for charges you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
   * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * GET /v1/charges/search
   */
  search(
    request: requests.SearchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ChargeSearchResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/charges/search",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "query",
          value: z.string().parse(request.query),
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
          name: "page",
          value: z.string().optional().parse(request.page),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$ChargeSearchResponse.in),
      opts,
    });
  }
  /**
   * List all charges
   *
   * <p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>
   *
   * GET /v1/charges
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ChargeListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/charges",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$ChargeListCreatedObj0.out, z.number().int()])
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
          name: "payment_intent",
          value: z.string().optional().parse(request.paymentIntent),
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
          name: "transfer_group",
          value: z.string().optional().parse(request.transferGroup),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$ChargeListResponse.in),
      opts,
    });
  }
}
