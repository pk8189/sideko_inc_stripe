import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/subscription-item/request-types";
import { Schemas$DeletedSubscriptionItem } from "@sideko-inc/stripe/types/deleted-subscription-item";
import { Schemas$SubscriptionItem } from "@sideko-inc/stripe/types/subscription-item";
import { Schemas$SubscriptionItemCreateBody } from "@sideko-inc/stripe/types/subscription-item-create-body";
import { Schemas$SubscriptionItemDeleteBody } from "@sideko-inc/stripe/types/subscription-item-delete-body";
import { Schemas$SubscriptionItemListResponse } from "@sideko-inc/stripe/types/subscription-item-list-response";
import { Schemas$SubscriptionItemUpdateBody } from "@sideko-inc/stripe/types/subscription-item-update-body";
import * as z from "zod";

export class SubscriptionItemClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a subscription item
   *
   * <p>Updates the plan or quantity of an item on a current subscription.</p>
   *
   * POST /v1/subscription_items/{item}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionItem> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/subscription_items/${request.item}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SubscriptionItemUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$SubscriptionItem.in),
      opts,
    });
  }
  /**
   * Create a subscription item
   *
   * <p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>
   *
   * POST /v1/subscription_items
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionItem> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/subscription_items",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SubscriptionItemCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$SubscriptionItem.in),
      opts,
    });
  }
  /**
   * Retrieve a subscription item
   *
   * <p>Retrieves the subscription item with the given ID.</p>
   *
   * GET /v1/subscription_items/{item}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionItem> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/subscription_items/${request.item}`,
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
      responseSchema: z.lazy(() => Schemas$SubscriptionItem.in),
      opts,
    });
  }
  /**
   * List all subscription items
   *
   * <p>Returns a list of your subscription items for a given subscription.</p>
   *
   * GET /v1/subscription_items
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.SubscriptionItemListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/subscription_items",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "subscription",
          value: z.string().parse(request.subscription),
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
      responseSchema: z.lazy(() => Schemas$SubscriptionItemListResponse.in),
      opts,
    });
  }
  /**
   * Delete a subscription item
   *
   * <p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>
   *
   * DELETE /v1/subscription_items/{item}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedSubscriptionItem> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/subscription_items/${request.item}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$SubscriptionItemDeleteBody.out.parse(request),
      responseSchema: Schemas$DeletedSubscriptionItem.in,
      opts,
    });
  }
}
