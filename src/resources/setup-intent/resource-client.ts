import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/setup-intent/request-types";
import { Schemas$SetupIntent } from "@sideko-inc/stripe/types/setup-intent";
import { Schemas$SetupIntentCancelBody } from "@sideko-inc/stripe/types/setup-intent-cancel-body";
import { Schemas$SetupIntentConfirmBody } from "@sideko-inc/stripe/types/setup-intent-confirm-body";
import { Schemas$SetupIntentCreateBody } from "@sideko-inc/stripe/types/setup-intent-create-body";
import { Schemas$SetupIntentListCreatedObj0 } from "@sideko-inc/stripe/types/setup-intent-list-created-obj0";
import { Schemas$SetupIntentListResponse } from "@sideko-inc/stripe/types/setup-intent-list-response";
import { Schemas$SetupIntentUpdateBody } from "@sideko-inc/stripe/types/setup-intent-update-body";
import { Schemas$SetupIntentVerifyMicrodepositsBody } from "@sideko-inc/stripe/types/setup-intent-verify-microdeposits-body";
import * as z from "zod";

export class SetupIntentClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Verify microdeposits on a SetupIntent
   *
   * <p>Verifies microdeposits on a SetupIntent object.</p>
   *
   * POST /v1/setup_intents/{intent}/verify_microdeposits
   */
  verifyMicrodeposits(
    request: requests.VerifyMicrodepositsRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SetupIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/setup_intents/${request.intent}/verify_microdeposits`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SetupIntentVerifyMicrodepositsBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$SetupIntent.in),
      opts,
    });
  }
  /**
   * Confirm a SetupIntent
   *
   * <p>Confirm that your customer intends to set up the current or
   * provided payment method. For example, you would confirm a SetupIntent
   * when a customer hits the “Save” button on a payment method management
   * page on your website.</p>
   *
   * <p>If the selected payment method does not require any additional
   * steps from the customer, the SetupIntent will transition to the
   * <code>succeeded</code> status.</p>
   *
   * <p>Otherwise, it will transition to the <code>requires_action</code> status and
   * suggest additional actions via <code>next_action</code>. If setup fails,
   * the SetupIntent will transition to the
   * <code>requires_payment_method</code> status or the <code>canceled</code> status if the
   * confirmation limit is reached.</p>
   *
   * POST /v1/setup_intents/{intent}/confirm
   */
  confirm(
    request: requests.ConfirmRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SetupIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/setup_intents/${request.intent}/confirm`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SetupIntentConfirmBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$SetupIntent.in),
      opts,
    });
  }
  /**
   * Cancel a SetupIntent
   *
   * <p>You can cancel a SetupIntent object when it’s in one of these statuses: <code>requires_payment_method</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>
   *
   * <p>After you cancel it, setup is abandoned and any operations on the SetupIntent fail with an error. You can’t cancel the SetupIntent for a Checkout Session. <a href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a> instead.</p>
   *
   * POST /v1/setup_intents/{intent}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SetupIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/setup_intents/${request.intent}/cancel`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SetupIntentCancelBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$SetupIntent.in),
      opts,
    });
  }
  /**
   * Update a SetupIntent
   *
   * <p>Updates a SetupIntent object.</p>
   *
   * POST /v1/setup_intents/{intent}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SetupIntent> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/setup_intents/${request.intent}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SetupIntentUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$SetupIntent.in),
      opts,
    });
  }
  /**
   * Create a SetupIntent
   *
   * <p>Creates a SetupIntent object.</p>
   *
   * <p>After you create the SetupIntent, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
   * it to collect any required permissions to charge the payment method later.</p>
   *
   * POST /v1/setup_intents
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.SetupIntent> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/setup_intents",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SetupIntentCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$SetupIntent.in),
      opts,
    });
  }
  /**
   * Retrieve a SetupIntent
   *
   * <p>Retrieves the details of a SetupIntent that has previously been created. </p>
   *
   * <p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>
   *
   * <p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#setup_intent_object">SetupIntent</a> object reference for more details.</p>
   *
   * GET /v1/setup_intents/{intent}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SetupIntent> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/setup_intents/${request.intent}`,
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
      responseSchema: z.lazy(() => Schemas$SetupIntent.in),
      opts,
    });
  }
  /**
   * List all SetupIntents
   *
   * <p>Returns a list of SetupIntents.</p>
   *
   * GET /v1/setup_intents
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SetupIntentListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/setup_intents",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "attach_to_self",
          value: z.boolean().optional().parse(request.attachToSelf),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$SetupIntentListCreatedObj0.out, z.number().int()])
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
          name: "payment_method",
          value: z.string().optional().parse(request.paymentMethod),
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
      responseSchema: z.lazy(() => Schemas$SetupIntentListResponse.in),
      opts,
    });
  }
}
