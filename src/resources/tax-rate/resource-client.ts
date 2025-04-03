import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax-rate/request-types";
import { Schemas$TaxRate } from "@sideko-inc/stripe/types/tax-rate";
import { Schemas$TaxRateCreateBody } from "@sideko-inc/stripe/types/tax-rate-create-body";
import { Schemas$TaxRateListCreatedObj0 } from "@sideko-inc/stripe/types/tax-rate-list-created-obj0";
import { Schemas$TaxRateListResponse } from "@sideko-inc/stripe/types/tax-rate-list-response";
import { Schemas$TaxRateUpdateBody } from "@sideko-inc/stripe/types/tax-rate-update-body";
import * as z from "zod";

export class TaxRateClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a tax rate
   *
   * <p>Updates an existing tax rate.</p>
   *
   * POST /v1/tax_rates/{tax_rate}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRate> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/tax_rates/${request.taxRate}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxRateUpdateBody.out.parse(request),
      responseSchema: Schemas$TaxRate.in,
      opts,
    });
  }
  /**
   * Create a tax rate
   *
   * <p>Creates a new tax rate.</p>
   *
   * POST /v1/tax_rates
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRate> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax_rates",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxRateCreateBody.out.parse(request),
      responseSchema: Schemas$TaxRate.in,
      opts,
    });
  }
  /**
   * Retrieve a tax rate
   *
   * <p>Retrieves a tax rate with the given ID</p>
   *
   * GET /v1/tax_rates/{tax_rate}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRate> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax_rates/${request.taxRate}`,
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
      responseSchema: Schemas$TaxRate.in,
      opts,
    });
  }
  /**
   * List all tax rates
   *
   * <p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>
   *
   * GET /v1/tax_rates
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxRateListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/tax_rates",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "active",
          value: z.boolean().optional().parse(request.active),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$TaxRateListCreatedObj0.out, z.number().int()])
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
          name: "inclusive",
          value: z.boolean().optional().parse(request.inclusive),
          style: "form",
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
      responseSchema: Schemas$TaxRateListResponse.in,
      opts,
    });
  }
}
