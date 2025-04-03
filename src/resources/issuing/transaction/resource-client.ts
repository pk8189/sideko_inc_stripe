import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/issuing/transaction/request-types";
import { Schemas$IssuingTransaction } from "@sideko-inc/stripe/types/issuing-transaction";
import { Schemas$IssuingTransactionListCreatedObj0 } from "@sideko-inc/stripe/types/issuing-transaction-list-created-obj0";
import { Schemas$IssuingTransactionListResponse } from "@sideko-inc/stripe/types/issuing-transaction-list-response";
import { Schemas$IssuingTransactionUpdateBody } from "@sideko-inc/stripe/types/issuing-transaction-update-body";
import * as z from "zod";

export class TransactionClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a transaction
   *
   * <p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
   *
   * POST /v1/issuing/transactions/{transaction}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingTransaction> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/issuing/transactions/${request.transaction}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$IssuingTransactionUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$IssuingTransaction.in),
      opts,
    });
  }
  /**
   * Retrieve a transaction
   *
   * <p>Retrieves an Issuing <code>Transaction</code> object.</p>
   *
   * GET /v1/issuing/transactions/{transaction}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingTransaction> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/issuing/transactions/${request.transaction}`,
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
      responseSchema: z.lazy(() => Schemas$IssuingTransaction.in),
      opts,
    });
  }
  /**
   * List all transactions
   *
   * <p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/issuing/transactions
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IssuingTransactionListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/issuing/transactions",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "card",
          value: z.string().optional().parse(request.card),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "cardholder",
          value: z.string().optional().parse(request.cardholder),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$IssuingTransactionListCreatedObj0.out,
              z.number().int(),
            ])
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
        encodeQueryParam({
          name: "type",
          value: z.enum(["capture", "refund"]).optional().parse(request.type),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$IssuingTransactionListResponse.in),
      opts,
    });
  }
}
