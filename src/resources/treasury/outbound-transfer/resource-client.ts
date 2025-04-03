import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/outbound-transfer/request-types";
import { Schemas$TreasuryOutboundTransfer } from "@sideko-inc/stripe/types/treasury-outbound-transfer";
import { Schemas$TreasuryOutboundTransferCancelBody } from "@sideko-inc/stripe/types/treasury-outbound-transfer-cancel-body";
import { Schemas$TreasuryOutboundTransferCreateBody } from "@sideko-inc/stripe/types/treasury-outbound-transfer-create-body";
import { Schemas$TreasuryOutboundTransferListResponse } from "@sideko-inc/stripe/types/treasury-outbound-transfer-list-response";
import * as z from "zod";

export class OutboundTransferClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Cancel an OutboundTransfer
   *
   * <p>An OutboundTransfer can be canceled if the funds have not yet been paid out.</p>
   *
   * POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/treasury/outbound_transfers/${request.outboundTransfer}/cancel`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryOutboundTransferCancelBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
  /**
   * Create an OutboundTransfer
   *
   * <p>Creates an OutboundTransfer.</p>
   *
   * POST /v1/treasury/outbound_transfers
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/treasury/outbound_transfers",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryOutboundTransferCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
  /**
   * Retrieve an OutboundTransfer
   *
   * <p>Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.</p>
   *
   * GET /v1/treasury/outbound_transfers/{outbound_transfer}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransfer> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/outbound_transfers/${request.outboundTransfer}`,
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
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundTransfer.in),
      opts,
    });
  }
  /**
   * List all OutboundTransfers
   *
   * <p>Returns a list of OutboundTransfers sent from the specified FinancialAccount.</p>
   *
   * GET /v1/treasury/outbound_transfers
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundTransferListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/outbound_transfers",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "financial_account",
          value: z.string().parse(request.financialAccount),
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
        encodeQueryParam({
          name: "status",
          value: z
            .enum(["canceled", "failed", "posted", "processing", "returned"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(
        () => Schemas$TreasuryOutboundTransferListResponse.in,
      ),
      opts,
    });
  }
}
