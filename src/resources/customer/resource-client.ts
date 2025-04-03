import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { BalanceTransactionClient } from "@sideko-inc/stripe/resources/customer/balance-transaction";
import { BankAccountClient } from "@sideko-inc/stripe/resources/customer/bank-account";
import { CardClient } from "@sideko-inc/stripe/resources/customer/card";
import { CashBalanceClient } from "@sideko-inc/stripe/resources/customer/cash-balance";
import { CashBalanceTransactionClient } from "@sideko-inc/stripe/resources/customer/cash-balance-transaction";
import { DiscountClient } from "@sideko-inc/stripe/resources/customer/discount";
import { FundingInstructionClient } from "@sideko-inc/stripe/resources/customer/funding-instruction";
import { PaymentMethodClient } from "@sideko-inc/stripe/resources/customer/payment-method";
import * as requests from "@sideko-inc/stripe/resources/customer/request-types";
import { SourceClient } from "@sideko-inc/stripe/resources/customer/source";
import { SubscriptionClient } from "@sideko-inc/stripe/resources/customer/subscription";
import { TaxIdClient } from "@sideko-inc/stripe/resources/customer/tax-id";
import { Schemas$Customer } from "@sideko-inc/stripe/types/customer";
import { Schemas$CustomerCreateBody } from "@sideko-inc/stripe/types/customer-create-body";
import { Schemas$CustomerListCreatedObj0 } from "@sideko-inc/stripe/types/customer-list-created-obj0";
import { Schemas$CustomerListResponse } from "@sideko-inc/stripe/types/customer-list-response";
import { Schemas$CustomerSearchResponse } from "@sideko-inc/stripe/types/customer-search-response";
import { Schemas$CustomerUpdateBody } from "@sideko-inc/stripe/types/customer-update-body";
import { Schemas$DeletedCustomer } from "@sideko-inc/stripe/types/deleted-customer";
import * as z from "zod";

export class CustomerClient extends CoreResourceClient {
  bankAccount: BankAccountClient;
  card: CardClient;
  discount: DiscountClient;
  source: SourceClient;
  subscription: SubscriptionClient;
  taxId: TaxIdClient;
  balanceTransaction: BalanceTransactionClient;
  cashBalance: CashBalanceClient;
  cashBalanceTransaction: CashBalanceTransactionClient;
  paymentMethod: PaymentMethodClient;
  fundingInstruction: FundingInstructionClient;

  constructor(client: CoreClient) {
    super(client);

    this.bankAccount = new BankAccountClient(this._client);
    this.card = new CardClient(this._client);
    this.discount = new DiscountClient(this._client);
    this.source = new SourceClient(this._client);
    this.subscription = new SubscriptionClient(this._client);
    this.taxId = new TaxIdClient(this._client);
    this.balanceTransaction = new BalanceTransactionClient(this._client);
    this.cashBalance = new CashBalanceClient(this._client);
    this.cashBalanceTransaction = new CashBalanceTransactionClient(
      this._client,
    );
    this.paymentMethod = new PaymentMethodClient(this._client);
    this.fundingInstruction = new FundingInstructionClient(this._client);
  }
  /**
   * Update a customer
   *
   * <p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer’s active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>
   *
   * <p>This request accepts mostly the same arguments as the customer creation call.</p>
   *
   * POST /v1/customers/{customer}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Customer> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Customer.in),
      opts,
    });
  }
  /**
   * Create a customer
   *
   * <p>Creates a new customer object.</p>
   *
   * POST /v1/customers
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Customer> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/customers",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Customer.in),
      opts,
    });
  }
  /**
   * Retrieve a customer
   *
   * <p>Retrieves a Customer object.</p>
   *
   * GET /v1/customers/{customer}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Customer | types.DeletedCustomer> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}`,
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
      responseSchema: z.union([
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ]),
      opts,
    });
  }
  /**
   * Search customers
   *
   * <p>Search for customers you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
   * Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.</p>
   *
   * GET /v1/customers/search
   */
  search(
    request: requests.SearchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerSearchResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/customers/search",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "query",
          value: z.string().parse(request.query),
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
          name: "page",
          value: z.string().optional().parse(request.page),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$CustomerSearchResponse.in),
      opts,
    });
  }
  /**
   * List all customers
   *
   * <p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>
   *
   * GET /v1/customers
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/customers",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$CustomerListCreatedObj0.out, z.number().int()])
            .optional()
            .parse(request.created),
          style: "deepObject",
          explode: true,
        }),
        encodeQueryParam({
          name: "email",
          value: z.string().optional().parse(request.email),
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
          name: "test_clock",
          value: z.string().optional().parse(request.testClock),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$CustomerListResponse.in),
      opts,
    });
  }
  /**
   * Delete a customer
   *
   * <p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>
   *
   * DELETE /v1/customers/{customer}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedCustomer> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/customers/${request.customer}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$DeletedCustomer.in,
      opts,
    });
  }
}
