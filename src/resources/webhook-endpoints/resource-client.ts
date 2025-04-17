import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/webhook-endpoints/request-types";
import { Schemas$DeletedWebhookEndpoint } from "@sideko-inc/stripe/types/deleted-webhook-endpoint";
import { Schemas$WebhookEndpoint } from "@sideko-inc/stripe/types/webhook-endpoint";
import { Schemas$WebhookEndpointsCreateBody } from "@sideko-inc/stripe/types/webhook-endpoints-create-body";
import { Schemas$WebhookEndpointsListResponse } from "@sideko-inc/stripe/types/webhook-endpoints-list-response";
import { Schemas$WebhookEndpointsUpdateBody } from "@sideko-inc/stripe/types/webhook-endpoints-update-body";
import * as z from "zod";

export class WebhookEndpointsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a webhook endpoint
   *
   * <p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>
   *
   * POST /v1/webhook_endpoints/{webhook_endpoint}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.WebhookEndpoint> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/webhook_endpoints/${request.webhookEndpoint}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$WebhookEndpointsUpdateBody.out.parse(request),
      responseSchema: Schemas$WebhookEndpoint.in,
      opts,
    });
  }
  /**
   * Create a webhook endpoint
   *
   * <p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>
   *
   * POST /v1/webhook_endpoints
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.WebhookEndpoint> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/webhook_endpoints",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$WebhookEndpointsCreateBody.out.parse(request),
      responseSchema: Schemas$WebhookEndpoint.in,
      opts,
    });
  }
  /**
   * Retrieve a webhook endpoint
   *
   * <p>Retrieves the webhook endpoint with the given ID.</p>
   *
   * GET /v1/webhook_endpoints/{webhook_endpoint}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.WebhookEndpoint> {
    const hasData = request.data && Object.keys(request.data).length > 0;

    return this._client.makeRequest({
      method: "get",
      path: `/v1/webhook_endpoints/${request.webhookEndpoint}`,
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "expand",
          value: z.array(z.string()).optional().parse(request.expand),
          style: "deepObject",
          explode: true,
        }),
      ],
      ...(hasData && {
        contentType: "application/x-www-form-urlencoded",
        body: z.record(z.string(), z.any()).parse(request.data),
      }),
      responseSchema: Schemas$WebhookEndpoint.in,
      opts,
    });
  }
  /**
   * List all webhook endpoints
   *
   * <p>Returns a list of your webhook endpoints.</p>
   *
   * GET /v1/webhook_endpoints
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.WebhookEndpointsListResponse> {
    const hasData = request.data && Object.keys(request.data).length > 0;

    return this._client.makeRequest({
      method: "get",
      path: "/v1/webhook_endpoints",
      auth: ["basicAuth", "bearerAuth"],
      query: [
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
      ...(hasData && {
        contentType: "application/x-www-form-urlencoded",
        body: z.record(z.string(), z.any()).parse(request.data),
      }),
      responseSchema: Schemas$WebhookEndpointsListResponse.in,
      opts,
    });
  }
  /**
   * Delete a webhook endpoint
   *
   * <p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>
   *
   * DELETE /v1/webhook_endpoints/{webhook_endpoint}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedWebhookEndpoint> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/webhook_endpoints/${request.webhookEndpoint}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$DeletedWebhookEndpoint.in,
      opts,
    });
  }
}
