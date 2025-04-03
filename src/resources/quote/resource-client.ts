import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  BinaryResponse,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
  zodUploadFile,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/quote/request-types";
import { Schemas$Quote } from "@sideko-inc/stripe/types/quote";
import { Schemas$QuoteAcceptBody } from "@sideko-inc/stripe/types/quote-accept-body";
import { Schemas$QuoteCancelBody } from "@sideko-inc/stripe/types/quote-cancel-body";
import { Schemas$QuoteComputedUpfrontLineItemsResponse } from "@sideko-inc/stripe/types/quote-computed-upfront-line-items-response";
import { Schemas$QuoteCreateBody } from "@sideko-inc/stripe/types/quote-create-body";
import { Schemas$QuoteFinalizeBody } from "@sideko-inc/stripe/types/quote-finalize-body";
import { Schemas$QuoteListResponse } from "@sideko-inc/stripe/types/quote-list-response";
import { Schemas$QuoteUpdateBody } from "@sideko-inc/stripe/types/quote-update-body";
import * as z from "zod";

export class QuoteClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Finalize a quote
   *
   * <p>Finalizes the quote.</p>
   *
   * POST /v1/quotes/{quote}/finalize
   */
  finalize(
    request: requests.FinalizeRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/quotes/${request.quote}/finalize`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$QuoteFinalizeBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Cancel a quote
   *
   * <p>Cancels the quote.</p>
   *
   * POST /v1/quotes/{quote}/cancel
   */
  cancel(
    request: requests.CancelRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/quotes/${request.quote}/cancel`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$QuoteCancelBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Accept a quote
   *
   * <p>Accepts the specified quote.</p>
   *
   * POST /v1/quotes/{quote}/accept
   */
  accept(
    request: requests.AcceptRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/quotes/${request.quote}/accept`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$QuoteAcceptBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Update a quote
   *
   * <p>A quote models prices and services for a customer.</p>
   *
   * POST /v1/quotes/{quote}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/quotes/${request.quote}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$QuoteUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Create a quote
   *
   * <p>A quote models prices and services for a customer. Default options for <code>header</code>, <code>description</code>, <code>footer</code>, and <code>expires_at</code> can be set in the dashboard via the <a href="https://dashboard.stripe.com/settings/billing/quote">quote template</a>.</p>
   *
   * POST /v1/quotes
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/quotes",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$QuoteCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * Download quote PDF
   *
   * <p>Download the PDF for a finalized quote. Explanation for special handling can be found <a href="https://docs.stripe.com/quotes/overview#quote_pdf">here</a></p>
   *
   * GET /v1/quotes/{quote}/pdf
   */
  pdf(
    request: requests.PdfRequest,
    opts?: RequestOptions,
  ): ApiPromise<BinaryResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/quotes/${request.quote}/pdf`,
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
      responseSchema: zodUploadFile,
      opts,
    });
  }
  /**
   * Retrieve a quote's upfront line items
   *
   * <p>When retrieving a quote, there is an includable <a href="https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items"><strong>computed.upfront.line_items</strong></a> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.</p>
   *
   * GET /v1/quotes/{quote}/computed_upfront_line_items
   */
  computedUpfrontLineItems(
    request: requests.ComputedUpfrontLineItemsRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.QuoteComputedUpfrontLineItemsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/quotes/${request.quote}/computed_upfront_line_items`,
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
      responseSchema: z.lazy(
        () => Schemas$QuoteComputedUpfrontLineItemsResponse.in,
      ),
      opts,
    });
  }
  /**
   * Retrieve a quote
   *
   * <p>Retrieves the quote with the given ID.</p>
   *
   * GET /v1/quotes/{quote}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Quote> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/quotes/${request.quote}`,
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
      responseSchema: z.lazy(() => Schemas$Quote.in),
      opts,
    });
  }
  /**
   * List all quotes
   *
   * <p>Returns a list of your quotes.</p>
   *
   * GET /v1/quotes
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.QuoteListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/quotes",
      auth: ["basicAuth", "bearerAuth"],
      query: [
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
            .enum(["accepted", "canceled", "draft", "open"])
            .optional()
            .parse(request.status),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "test_clock",
          value: z.string().optional().parse(request.testClock),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$QuoteListResponse.in),
      opts,
    });
  }
}
