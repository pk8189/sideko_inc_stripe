import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/customer/source/request-types";
import { Schemas$Account } from "@sideko-inc/stripe/types/account";
import { Schemas$BankAccount } from "@sideko-inc/stripe/types/bank-account";
import { Schemas$Card } from "@sideko-inc/stripe/types/card";
import { Schemas$CustomerSourceCreateBody } from "@sideko-inc/stripe/types/customer-source-create-body";
import { Schemas$CustomerSourceDeleteBody } from "@sideko-inc/stripe/types/customer-source-delete-body";
import { Schemas$CustomerSourceListResponse } from "@sideko-inc/stripe/types/customer-source-list-response";
import { Schemas$CustomerSourceUpdateBody } from "@sideko-inc/stripe/types/customer-source-update-body";
import { Schemas$CustomerSourceVerifyBody } from "@sideko-inc/stripe/types/customer-source-verify-body";
import { Schemas$DeletedBankAccount } from "@sideko-inc/stripe/types/deleted-bank-account";
import { Schemas$DeletedCard } from "@sideko-inc/stripe/types/deleted-card";
import { Schemas$Source } from "@sideko-inc/stripe/types/source";
import * as z from "zod";

export class SourceClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Verify a bank account
   *
   * <p>Verify a specified bank account for a given customer.</p>
   *
   * POST /v1/customers/{customer}/sources/{id}/verify
   */
  verify(
    request: requests.VerifyRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.BankAccount> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/sources/${request.id}/verify`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerSourceVerifyBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$BankAccount.in),
      opts,
    });
  }
  /**
   * <p>Update a specified source for a given customer.</p>
   *
   * POST /v1/customers/{customer}/sources/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Card | types.BankAccount | types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/sources/${request.id}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerSourceUpdateBody.out.parse(request),
      responseSchema: z.union([
        z.lazy(() => Schemas$Card.in),
        z.lazy(() => Schemas$BankAccount.in),
        Schemas$Source.in,
      ]),
      opts,
    });
  }
  /**
   * Create a card
   *
   * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
   *
   * <p>If the card’s owner has no default card, then the new card will become the default.
   * However, if the owner already has a default, then it will not change.
   * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
   *
   * POST /v1/customers/{customer}/sources
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account | types.BankAccount | types.Card | types.Source> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/customers/${request.customer}/sources`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerSourceCreateBody.out.parse(request),
      responseSchema: z.union([
        z.lazy(() => Schemas$Account.in),
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
      ]),
      opts,
    });
  }
  /**
   * <p>Retrieve a specified source for a given customer.</p>
   *
   * GET /v1/customers/{customer}/sources/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Account | types.BankAccount | types.Card | types.Source> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/sources/${request.id}`,
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
        z.lazy(() => Schemas$Account.in),
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
      ]),
      opts,
    });
  }
  /**
   * <p>List sources for a specified customer.</p>
   *
   * GET /v1/customers/{customer}/sources
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CustomerSourceListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/customers/${request.customer}/sources`,
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
          name: "object",
          value: z.string().optional().parse(request.object),
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
      responseSchema: z.lazy(() => Schemas$CustomerSourceListResponse.in),
      opts,
    });
  }
  /**
   * Delete a customer source
   *
   * <p>Delete a specified source for a given customer.</p>
   *
   * DELETE /v1/customers/{customer}/sources/{id}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<
    | (types.Account | types.BankAccount | types.Card | types.Source)
    | (types.DeletedBankAccount | types.DeletedCard)
  > {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/customers/${request.customer}/sources/${request.id}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$CustomerSourceDeleteBody.out.parse(request),
      responseSchema: z.union([
        z.union([
          z.lazy(() => Schemas$Account.in),
          z.lazy(() => Schemas$BankAccount.in),
          z.lazy(() => Schemas$Card.in),
          Schemas$Source.in,
        ]),
        z.union([Schemas$DeletedBankAccount.in, Schemas$DeletedCard.in]),
      ]),
      opts,
    });
  }
}
