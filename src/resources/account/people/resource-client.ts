import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/account/people/request-types";
import { Schemas$AccountPeopleCreateBody } from "@sideko-inc/stripe/types/account-people-create-body";
import { Schemas$AccountPeopleListRelationship } from "@sideko-inc/stripe/types/account-people-list-relationship";
import { Schemas$AccountPeopleListResponse } from "@sideko-inc/stripe/types/account-people-list-response";
import { Schemas$AccountPeopleUpdateBody } from "@sideko-inc/stripe/types/account-people-update-body";
import { Schemas$DeletedPerson } from "@sideko-inc/stripe/types/deleted-person";
import { Schemas$Person } from "@sideko-inc/stripe/types/person";
import * as z from "zod";

export class PeopleClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a person
   *
   * <p>Updates an existing person.</p>
   *
   * POST /v1/accounts/{account}/people/{person}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Person> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/people/${request.person}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountPeopleUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Person.in),
      opts,
    });
  }
  /**
   * Create a person
   *
   * <p>Creates a new person.</p>
   *
   * POST /v1/accounts/{account}/people
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Person> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/accounts/${request.account}/people`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$AccountPeopleCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$Person.in),
      opts,
    });
  }
  /**
   * Retrieve a person
   *
   * <p>Retrieves an existing person.</p>
   *
   * GET /v1/accounts/{account}/people/{person}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Person> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/people/${request.person}`,
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
      responseSchema: z.lazy(() => Schemas$Person.in),
      opts,
    });
  }
  /**
   * List all persons
   *
   * <p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>
   *
   * GET /v1/accounts/{account}/people
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.AccountPeopleListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/accounts/${request.account}/people`,
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
          name: "relationship",
          value: Schemas$AccountPeopleListRelationship.out
            .optional()
            .parse(request.relationship),
          style: "deepObject",
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
      responseSchema: z.lazy(() => Schemas$AccountPeopleListResponse.in),
      opts,
    });
  }
  /**
   * Delete a person
   *
   * <p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>
   *
   * DELETE /v1/accounts/{account}/people/{person}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedPerson> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/accounts/${request.account}/people/${request.person}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$DeletedPerson.in,
      opts,
    });
  }
}
