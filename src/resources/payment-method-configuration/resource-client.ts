import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/payment-method-configuration/request-types";
import { Schemas$PaymentMethodConfiguration } from "@sideko-inc/stripe/types/payment-method-configuration";
import { Schemas$PaymentMethodConfigurationCreateBody } from "@sideko-inc/stripe/types/payment-method-configuration-create-body";
import { Schemas$PaymentMethodConfigurationListResponse } from "@sideko-inc/stripe/types/payment-method-configuration-list-response";
import { Schemas$PaymentMethodConfigurationUpdateBody } from "@sideko-inc/stripe/types/payment-method-configuration-update-body";
import * as z from "zod";

export class PaymentMethodConfigurationClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update payment method configuration
   *
   * <p>Update payment method configuration</p>
   *
   * POST /v1/payment_method_configurations/{configuration}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodConfiguration> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/payment_method_configurations/${request.configuration}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentMethodConfigurationUpdateBody.out.parse(request),
      responseSchema: Schemas$PaymentMethodConfiguration.in,
      opts,
    });
  }
  /**
   * Create a payment method configuration
   *
   * <p>Creates a payment method configuration</p>
   *
   * POST /v1/payment_method_configurations
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodConfiguration> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/payment_method_configurations",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$PaymentMethodConfigurationCreateBody.out.parse(request),
      responseSchema: Schemas$PaymentMethodConfiguration.in,
      opts,
    });
  }
  /**
   * Retrieve payment method configuration
   *
   * <p>Retrieve payment method configuration</p>
   *
   * GET /v1/payment_method_configurations/{configuration}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodConfiguration> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/payment_method_configurations/${request.configuration}`,
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
      responseSchema: Schemas$PaymentMethodConfiguration.in,
      opts,
    });
  }
  /**
   * List payment method configurations
   *
   * <p>List payment method configurations</p>
   *
   * GET /v1/payment_method_configurations
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.PaymentMethodConfigurationListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/payment_method_configurations",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "application",
          value: z
            .union([z.string(), z.string()])
            .optional()
            .parse(request.application),
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
      responseSchema: Schemas$PaymentMethodConfigurationListResponse.in,
      opts,
    });
  }
}
