import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/treasury/outbound-payment/request-types";
import { Schemas$TreasuryOutboundPayment } from "@sideko-inc/stripe/types/treasury-outbound-payment";
import { Schemas$TreasuryOutboundPaymentCancelBody } from "@sideko-inc/stripe/types/treasury-outbound-payment-cancel-body";
import { Schemas$TreasuryOutboundPaymentCreateBody } from "@sideko-inc/stripe/types/treasury-outbound-payment-create-body";
import { Schemas$TreasuryOutboundPaymentListCreatedObj0 } from "@sideko-inc/stripe/types/treasury-outbound-payment-list-created-obj0";
import { Schemas$TreasuryOutboundPaymentListResponse } from "@sideko-inc/stripe/types/treasury-outbound-payment-list-response";
import * as z from "zod";

export class OutboundPaymentClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Cancel an OutboundPayment
   *
   * <p>Cancel an OutboundPayment.</p>
   *
   * POST /v1/treasury/outbound_payments/{id}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundPayment> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/treasury/outbound_payments/${request.id}/cancel`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryOutboundPaymentCancelBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundPayment.in),
      opts,
    });
  }
  /**
   * Create an OutboundPayment
   *
   * <p>Creates an OutboundPayment.</p>
   *
   * POST /v1/treasury/outbound_payments
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundPayment> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/treasury/outbound_payments",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$TreasuryOutboundPaymentCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundPayment.in),
      opts,
    });
  }
  /**
   * Retrieve an OutboundPayment
   *
   * <p>Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.</p>
   *
   * GET /v1/treasury/outbound_payments/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundPayment> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/treasury/outbound_payments/${request.id}`,
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
      responseSchema: z.lazy(() => Schemas$TreasuryOutboundPayment.in),
      opts,
    });
  }
  /**
   * List all OutboundPayments
   *
   * <p>Returns a list of OutboundPayments sent from the specified FinancialAccount.</p>
   *
   * GET /v1/treasury/outbound_payments
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.TreasuryOutboundPaymentListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/treasury/outbound_payments",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "financial_account",
          value: z.string().parse(request.financialAccount),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$TreasuryOutboundPaymentListCreatedObj0.out,
              z.number().int(),
            ])
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
        () => Schemas$TreasuryOutboundPaymentListResponse.in,
      ),
      opts,
    });
  }
}
