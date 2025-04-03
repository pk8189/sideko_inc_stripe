import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/entitlement/feature/request-types";
import { Schemas$EntitlementFeatureCreateBody } from "@sideko-inc/stripe/types/entitlement-feature-create-body";
import { Schemas$EntitlementFeatureListResponse } from "@sideko-inc/stripe/types/entitlement-feature-list-response";
import { Schemas$EntitlementFeatureUpdateBody } from "@sideko-inc/stripe/types/entitlement-feature-update-body";
import { Schemas$EntitlementsFeature } from "@sideko-inc/stripe/types/entitlements-feature";
import * as z from "zod";

export class FeatureClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Updates a feature
   *
   * <p>Update a feature’s metadata or permanently deactivate it.</p>
   *
   * POST /v1/entitlements/features/{id}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EntitlementsFeature> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/entitlements/features/${request.id}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$EntitlementFeatureUpdateBody.out.parse(request),
      responseSchema: Schemas$EntitlementsFeature.in,
      opts,
    });
  }
  /**
   * Create a feature
   *
   * <p>Creates a feature</p>
   *
   * POST /v1/entitlements/features
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EntitlementsFeature> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/entitlements/features",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$EntitlementFeatureCreateBody.out.parse(request),
      responseSchema: Schemas$EntitlementsFeature.in,
      opts,
    });
  }
  /**
   * Retrieve a feature
   *
   * <p>Retrieves a feature</p>
   *
   * GET /v1/entitlements/features/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EntitlementsFeature> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/entitlements/features/${request.id}`,
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
      responseSchema: Schemas$EntitlementsFeature.in,
      opts,
    });
  }
  /**
   * List all features
   *
   * <p>Retrieve a list of features</p>
   *
   * GET /v1/entitlements/features
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.EntitlementFeatureListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/entitlements/features",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "archived",
          value: z.boolean().optional().parse(request.archived),
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
          name: "lookup_key",
          value: z.string().optional().parse(request.lookupKey),
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
      responseSchema: Schemas$EntitlementFeatureListResponse.in,
      opts,
    });
  }
}
