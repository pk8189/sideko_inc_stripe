import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { OwnersClient } from "@sideko-inc/stripe/resources/financial-connections/account/owners";
import * as requests from "@sideko-inc/stripe/resources/financial-connections/account/request-types";
import { Schemas$FinancialConnectionsAccount } from "@sideko-inc/stripe/types/financial-connections-account";
import { Schemas$FinancialConnectionsAccountDisconnectBody } from "@sideko-inc/stripe/types/financial-connections-account-disconnect-body";
import { Schemas$FinancialConnectionsAccountListAccountHolder } from "@sideko-inc/stripe/types/financial-connections-account-list-account-holder";
import { Schemas$FinancialConnectionsAccountListResponse } from "@sideko-inc/stripe/types/financial-connections-account-list-response";
import { Schemas$FinancialConnectionsAccountRefreshBody } from "@sideko-inc/stripe/types/financial-connections-account-refresh-body";
import { Schemas$FinancialConnectionsAccountSubscribeBody } from "@sideko-inc/stripe/types/financial-connections-account-subscribe-body";
import { Schemas$FinancialConnectionsAccountUnsubscribeBody } from "@sideko-inc/stripe/types/financial-connections-account-unsubscribe-body";
import * as z from "zod";

export class AccountClient extends CoreResourceClient {
  owners: OwnersClient;

  constructor(client: CoreClient) {
    super(client);

    this.owners = new OwnersClient(this._client);
  }
  /**
   * Unsubscribe from data refreshes for an Account
   *
   * <p>Unsubscribes from periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>
   *
   * POST /v1/financial_connections/accounts/{account}/unsubscribe
   */
  unsubscribe(
    request: requests.UnsubscribeRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/financial_connections/accounts/${request.account}/unsubscribe`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$FinancialConnectionsAccountUnsubscribeBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsAccount.in),
      opts,
    });
  }
  /**
   * Subscribe to data refreshes for an Account
   *
   * <p>Subscribes to periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>
   *
   * POST /v1/financial_connections/accounts/{account}/subscribe
   */
  subscribe(
    request: requests.SubscribeRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/financial_connections/accounts/${request.account}/subscribe`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$FinancialConnectionsAccountSubscribeBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsAccount.in),
      opts,
    });
  }
  /**
   * Refresh Account data
   *
   * <p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>
   *
   * POST /v1/financial_connections/accounts/{account}/refresh
   */
  refresh(
    request: requests.RefreshRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/financial_connections/accounts/${request.account}/refresh`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$FinancialConnectionsAccountRefreshBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsAccount.in),
      opts,
    });
  }
  /**
   * Disconnect an Account
   *
   * <p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>
   *
   * POST /v1/financial_connections/accounts/{account}/disconnect
   */
  disconnect(
    request: requests.DisconnectRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/financial_connections/accounts/${request.account}/disconnect`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$FinancialConnectionsAccountDisconnectBody.out.parse(
        request,
      ),
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsAccount.in),
      opts,
    });
  }
  /**
   * Retrieve an Account
   *
   * <p>Retrieves the details of an Financial Connections <code>Account</code>.</p>
   *
   * GET /v1/financial_connections/accounts/{account}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccount> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/financial_connections/accounts/${request.account}`,
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
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsAccount.in),
      opts,
    });
  }
  /**
   * List Accounts
   *
   * <p>Returns a list of Financial Connections <code>Account</code> objects.</p>
   *
   * GET /v1/financial_connections/accounts
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsAccountListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/financial_connections/accounts",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "account_holder",
          value: Schemas$FinancialConnectionsAccountListAccountHolder.out
            .optional()
            .parse(request.accountHolder),
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
          name: "session",
          value: z.string().optional().parse(request.session),
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
        () => Schemas$FinancialConnectionsAccountListResponse.in,
      ),
      opts,
    });
  }
}
