import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/tax/calculation/request-types";
import { Schemas$TaxCalculation } from "@sideko-inc/stripe/types/tax-calculation";
import { Schemas$TaxCalculationCreateBody } from "@sideko-inc/stripe/types/tax-calculation-create-body";
import * as z from "zod";

export class CalculationClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a Tax Calculation
   *
   * <p>Calculates tax based on the input and returns a Tax <code>Calculation</code> object.</p>
   *
   * POST /v1/tax/calculations
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxCalculation> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax/calculations",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxCalculationCreateBody.out.parse(request),
      responseSchema: Schemas$TaxCalculation.in,
      opts,
    });
  }
  /**
   * Retrieve a Tax Calculation
   *
   * <p>Retrieves a Tax <code>Calculation</code> object, if the calculation hasn’t expired.</p>
   *
   * GET /v1/tax/calculations/{calculation}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxCalculation> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax/calculations/${request.calculation}`,
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
      responseSchema: Schemas$TaxCalculation.in,
      opts,
    });
  }
}
