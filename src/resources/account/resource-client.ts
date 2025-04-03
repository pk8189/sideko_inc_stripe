import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { BankAccountClient } from "@sideko-inc/stripe/resources/account/bank-account";
import { CapabilityClient } from "@sideko-inc/stripe/resources/account/capability";
import { ExternalAccountClient } from "@sideko-inc/stripe/resources/account/external-account";
import { PeopleClient } from "@sideko-inc/stripe/resources/account/people";
import { PersonClient } from "@sideko-inc/stripe/resources/account/person";
import * as requests from "@sideko-inc/stripe/resources/account/request-types";
import { Schemas$Account } from "@sideko-inc/stripe/types/account";
import { Schemas$AccountCreateBody } from "@sideko-inc/stripe/types/account-create-body";
import { Schemas$AccountCreateLoginLinkBody } from "@sideko-inc/stripe/types/account-create-login-link-body";
import { Schemas$AccountListCreatedObj0 } from "@sideko-inc/stripe/types/account-list-created-obj0";
import { Schemas$AccountListResponse } from "@sideko-inc/stripe/types/account-list-response";
import { Schemas$AccountRejectBody } from "@sideko-inc/stripe/types/account-reject-body";
import { Schemas$AccountUpdateBody } from "@sideko-inc/stripe/types/account-update-body";
import { Schemas$DeletedAccount } from "@sideko-inc/stripe/types/deleted-account";
import { Schemas$LoginLink } from "@sideko-inc/stripe/types/login-link";
import * as z from "zod";

export class AccountClient extends CoreResourceClient {
  bankAccount: BankAccountClient;
  externalAccount: ExternalAccountClient;
  people: PeopleClient;
  person: PersonClient;
  capability: CapabilityClient;

  constructor(client: CoreClient) {
    super(client);

    this.bankAccount = new BankAccountClient(this._client);
    this.externalAccount = new ExternalAccountClient(this._client);
    this.people = new PeopleClient(this._client);
    this.person = new PersonClient(this._client);
    this.capability = new CapabilityClient(this._client);
  }
  /**
   * Reject an account
   *
   * <p>With <a href="/connect">Connect</a>, you can reject accounts that you have flagged as suspicious.</p>
   *
   * <p>Only accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be rejected. Test-mode accounts can be rejected at any time. Live-mode accounts can only be rejected after all balances are zero.</p>
   *
   * POST /v1/accounts/{account}/reject
   */
  reject(
    request: requests.RejectRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/reject`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountRejectBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Account.in),
      opts,
    });
  }
  /**
   * Create a login link
   *
   * <p>Creates a login link for a connected account to access the Express Dashboard.</p>
   *
   * <p><strong>You can only create login links for accounts that use the <a href="/connect/express-dashboard">Express Dashboard</a> and are connected to your platform</strong>.</p>
   *
   * POST /v1/accounts/{account}/login_links
   */
  createLoginLink(
    request: requests.CreateLoginLinkRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.LoginLink> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/login_links`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountCreateLoginLinkBody.out.parse(request),
      responseSchema: Schemas$LoginLink.in,
      opts,
    });
  }
  /**
   * Update an account
   *
   * <p>Updates a <a href="/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are
   * left unchanged.</p>
   *
   * <p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
   * is <code>application</code>, which includes Custom accounts, you can update any information on the account.</p>
   *
   * <p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
   * is <code>stripe</code>, which includes Standard and Express accounts, you can update all information until you create
   * an <a href="/api/account_links">Account Link</a> or <a href="/api/account_sessions">Account Session</a> to start Connect onboarding,
   * after which some properties can no longer be updated.</p>
   *
   * <p>To update your own account, use the <a href="https://dashboard.stripe.com/settings/account">Dashboard</a>. Refer to our
   * <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>
   *
   * POST /v1/accounts/{account}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Account.in),
      opts,
    });
  }
  /**
   * <p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
   * To do this, you’ll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p>
   *
   * <p>If you’ve already collected information for your connected accounts, you <a href="/docs/connect/best-practices#onboarding">can prefill that information</a> when
   * creating the account. Connect Onboarding won’t ask for the prefilled information during account onboarding.
   * You can prefill any information on the account.</p>
   *
   * POST /v1/accounts
   */
  create(
    request: requests.CreateRequest = {},
    opts?: RequestOptions,
  ): ApiPromise<types.Account> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/accounts",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Account.in),
      opts,
    });
  }
  /**
   * Retrieve account
   *
   * <p>Retrieves the details of an account.</p>
   *
   * GET /v1/accounts/{account}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}`,
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
      responseSchema: z.lazy(() => Schemas$Account.in),
      opts,
    });
  }
  /**
   * List all connected accounts
   *
   * <p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>
   *
   * GET /v1/accounts
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AccountListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/accounts",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$AccountListCreatedObj0.out, z.number().int()])
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
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$AccountListResponse.in),
      opts,
    });
  }
  /**
   * Retrieve account
   *
   * <p>Retrieves the details of an account.</p>
   *
   * GET /v1/account
   */
  details(
    request: requests.DetailsRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/account",
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
      responseSchema: z.lazy(() => Schemas$Account.in),
      opts,
    });
  }
  /**
   * Delete an account
   *
   * <p>With <a href="/connect">Connect</a>, you can delete accounts you manage.</p>
   *
   * <p>Test-mode accounts can be deleted at any time.</p>
   *
   * <p>Live-mode accounts where Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. Live-mode accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be deleted when all <a href="/api/balance/balance_object">balances</a> are zero.</p>
   *
   * <p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/settings/account">account information tab in your account settings</a> instead.</p>
   *
   * DELETE /v1/accounts/{account}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedAccount> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/accounts/${request.account}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$DeletedAccount.in,
      opts,
    });
  }
}
