import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/radar/value-list-item/request-types";
import { Schemas$DeletedRadarValueListItem } from "@sideko-inc/stripe/types/deleted-radar-value-list-item";
import { Schemas$RadarValueListItem } from "@sideko-inc/stripe/types/radar-value-list-item";
import { Schemas$RadarValueListItemCreateBody } from "@sideko-inc/stripe/types/radar-value-list-item-create-body";
import { Schemas$RadarValueListItemListCreatedObj0 } from "@sideko-inc/stripe/types/radar-value-list-item-list-created-obj0";
import { Schemas$RadarValueListItemListResponse } from "@sideko-inc/stripe/types/radar-value-list-item-list-response";
import * as z from "zod";

export class ValueListItemClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a value list item
   *
   * <p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>
   *
   * POST /v1/radar/value_list_items
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RadarValueListItem> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/radar/value_list_items",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$RadarValueListItemCreateBody.out.parse(request),
      responseSchema: Schemas$RadarValueListItem.in,
      opts,
    });
  }
  /**
   * Retrieve a value list item
   *
   * <p>Retrieves a <code>ValueListItem</code> object.</p>
   *
   * GET /v1/radar/value_list_items/{item}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RadarValueListItem> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/radar/value_list_items/${request.item}`,
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
      responseSchema: Schemas$RadarValueListItem.in,
      opts,
    });
  }
  /**
   * List all value list items
   *
   * <p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
   *
   * GET /v1/radar/value_list_items
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RadarValueListItemListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/radar/value_list_items",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "value_list",
          value: z.string().parse(request.valueList),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$RadarValueListItemListCreatedObj0.out,
              z.number().int(),
            ])
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
        encodeQueryParam({
          name: "value",
          value: z.string().optional().parse(request.value),
          style: "form",
          explode: true,
        }),
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$RadarValueListItemListResponse.in,
      opts,
    });
  }
  /**
   * Delete a value list item
   *
   * <p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>
   *
   * DELETE /v1/radar/value_list_items/{item}
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.DeletedRadarValueListItem> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/radar/value_list_items/${request.item}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: Schemas$DeletedRadarValueListItem.in,
      opts,
    });
  }
}
