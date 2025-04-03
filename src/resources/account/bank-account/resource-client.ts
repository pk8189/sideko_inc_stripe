import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/account/bank-account/request-types";
import { Schemas$AccountBankAccountCreateBody } from "@sideko-inc/stripe/types/account-bank-account-create-body";
import { Schemas$AccountBankAccountUpdateBody } from "@sideko-inc/stripe/types/account-bank-account-update-body";
import { Schemas$BankAccount } from "@sideko-inc/stripe/types/bank-account";
import { Schemas$Card } from "@sideko-inc/stripe/types/card";
import { Schemas$DeletedBankAccount } from "@sideko-inc/stripe/types/deleted-bank-account";
import { Schemas$DeletedCard } from "@sideko-inc/stripe/types/deleted-card";
import * as z from "zod";

export class BankAccountClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * <p>Updates the metadata, account holder name, account holder type of a bank account belonging to
   * a connected account and optionally sets it as the default for its currency. Other bank account
   * details are not editable by design.</p>
   *
   * <p>You can only update bank accounts when <a href="/api/accounts/object#account_object-controller-requirement_collection">account.controller.requirement_collection</a> is <code>application</code>, which includes <a href="/connect/custom-accounts">Custom accounts</a>.</p>
   *
   * <p>You can re-enable a disabled bank account by performing an update call without providing any
   * arguments or changes.</p>
   *
   * POST /v1/accounts/{account}/bank_accounts/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount | types.Card> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/bank_accounts/${request.id}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountBankAccountUpdateBody.out.parse(request),
      responseSchema: z.union([
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
      ]),
      opts,
    });
  }
  /**
   * Create an external account
   *
   * <p>Create an external account for a given account.</p>
   *
   * POST /v1/accounts/{account}/bank_accounts
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount | types.Card> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/bank_accounts`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountBankAccountCreateBody.out.parse(request),
      responseSchema: z.union([
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
      ]),
      opts,
    });
  }
  /**
   * Retrieve an external account
   *
   * <p>Retrieve a specified external account for a given account.</p>
   *
   * GET /v1/accounts/{account}/bank_accounts/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount | types.Card> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/bank_accounts/${request.id}`,
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
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
      ]),
      opts,
    });
  }
  /**
   * Delete an external account
   *
   * <p>Delete a specified external account for a given account.</p>
   *
   * DELETE /v1/accounts/{account}/bank_accounts/{id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedBankAccount | types.DeletedCard> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/accounts/${request.account}/bank_accounts/${request.id}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.union([
        Schemas$DeletedBankAccount.in,
        Schemas$DeletedCard.in,
      ]),
      opts,
    });
  }
}
