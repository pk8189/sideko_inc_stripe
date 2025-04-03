import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { LineItemsClient } from "@sideko-inc/stripe/resources/tax/transaction/line-items";
import * as requests from "@sideko-inc/stripe/resources/tax/transaction/request-types";
import { Schemas$TaxTransaction } from "@sideko-inc/stripe/types/tax-transaction";
import { Schemas$TaxTransactionCreateFromCalculationBody } from "@sideko-inc/stripe/types/tax-transaction-create-from-calculation-body";
import { Schemas$TaxTransactionCreateReversalBody } from "@sideko-inc/stripe/types/tax-transaction-create-reversal-body";
import * as z from "zod";

export class TransactionClient extends CoreResourceClient {
  lineItems: LineItemsClient;

  constructor(client: CoreClient) {
    super(client);

    this.lineItems = new LineItemsClient(this._client);
  }
  /**
   * Create a reversal transaction
   *
   * <p>Partially or fully reverses a previously created <code>Transaction</code>.</p>
   *
   * POST /v1/tax/transactions/create_reversal
   */
  createReversal(
    request: requests.CreateReversalRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax/transactions/create_reversal",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxTransactionCreateReversalBody.out.parse(request),
      responseSchema: Schemas$TaxTransaction.in,
      opts,
    });
  }
  /**
   * Create a transaction from a calculation
   *
   * <p>Creates a Tax Transaction from a calculation, if that calculation hasn’t expired. Calculations expire after 90 days.</p>
   *
   * POST /v1/tax/transactions/create_from_calculation
   */
  createFromCalculation(
    request: requests.CreateFromCalculationRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/tax/transactions/create_from_calculation",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TaxTransactionCreateFromCalculationBody.out.parse(request),
      responseSchema: Schemas$TaxTransaction.in,
      opts,
    });
  }
  /**
   * Retrieve a transaction
   *
   * <p>Retrieves a Tax <code>Transaction</code> object.</p>
   *
   * GET /v1/tax/transactions/{transaction}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TaxTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/tax/transactions/${request.transaction}`,
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
      responseSchema: Schemas$TaxTransaction.in,
      opts,
    });
  }
}
