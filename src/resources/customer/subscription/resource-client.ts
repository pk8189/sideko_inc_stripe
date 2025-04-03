import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { DiscountClient } from "@sideko-inc/stripe/resources/customer/subscription/discount";
import * as requests from "@sideko-inc/stripe/resources/customer/subscription/request-types";
import { Schemas$CustomerSubscriptionCreateBody } from "@sideko-inc/stripe/types/customer-subscription-create-body";
import { Schemas$CustomerSubscriptionDeleteBody } from "@sideko-inc/stripe/types/customer-subscription-delete-body";
import { Schemas$CustomerSubscriptionListResponse } from "@sideko-inc/stripe/types/customer-subscription-list-response";
import { Schemas$CustomerSubscriptionModifyBody } from "@sideko-inc/stripe/types/customer-subscription-modify-body";
import { Schemas$Subscription } from "@sideko-inc/stripe/types/subscription";
import * as z from "zod";

export class SubscriptionClient extends CoreResourceClient {
  discount: DiscountClient;

  constructor(client: CoreClient) {
    super(client);

    this.discount = new DiscountClient(this._client);
  }
  /**
   * Update a subscription on a customer
   *
   * <p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>
   *
   * POST /v1/customers/{customer}/subscriptions/{subscription_exposed_id}
   */
  modify(
    request: requests.ModifyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/subscriptions/${request.subscriptionExposedId}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerSubscriptionModifyBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
  /**
   * Create a subscription
   *
   * <p>Creates a new subscription on an existing customer.</p>
   *
   * POST /v1/customers/{customer}/subscriptions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/subscriptions`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerSubscriptionCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
  /**
   * Retrieve a subscription
   *
   * <p>Retrieves the subscription with the given ID.</p>
   *
   * GET /v1/customers/{customer}/subscriptions/{subscription_exposed_id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/subscriptions/${request.subscriptionExposedId}`,
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
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
  /**
   * List active subscriptions
   *
   * <p>You can see a list of the customer’s active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>
   *
   * GET /v1/customers/{customer}/subscriptions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerSubscriptionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/subscriptions`,
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
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$CustomerSubscriptionListResponse.in),
      opts,
    });
  }
  /**
   * Cancel a subscription
   *
   * <p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>
   *
   * <p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>
   *
   * <p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>
   *
   * DELETE /v1/customers/{customer}/subscriptions/{subscription_exposed_id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Subscription> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/customers/${request.customer}/subscriptions/${request.subscriptionExposedId}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerSubscriptionDeleteBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Subscription.in),
      opts,
    });
  }
}
