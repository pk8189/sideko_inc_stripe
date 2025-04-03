import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/file-link/request-types";
import { Schemas$FileLink } from "@sideko-inc/stripe/types/file-link";
import { Schemas$FileLinkCreateBody } from "@sideko-inc/stripe/types/file-link-create-body";
import { Schemas$FileLinkListCreatedObj0 } from "@sideko-inc/stripe/types/file-link-list-created-obj0";
import { Schemas$FileLinkListResponse } from "@sideko-inc/stripe/types/file-link-list-response";
import { Schemas$FileLinkUpdateBody } from "@sideko-inc/stripe/types/file-link-update-body";
import * as z from "zod";

export class FileLinkClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Update a file link
   *
   * <p>Updates an existing file link object. Expired links can no longer be updated.</p>
   *
   * POST /v1/file_links/{link}
   */
  update(
    request: requests.UpdateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FileLink> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/file_links/${request.link}`,
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$FileLinkUpdateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$FileLink.in),
      opts,
    });
  }
  /**
   * Create a file link
   *
   * <p>Creates a new file link object.</p>
   *
   * POST /v1/file_links
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FileLink> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/file_links",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$FileLinkCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$FileLink.in),
      opts,
    });
  }
  /**
   * Retrieve a file link
   *
   * <p>Retrieves the file link with the given ID.</p>
   *
   * GET /v1/file_links/{link}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FileLink> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/file_links/${request.link}`,
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
      responseSchema: z.lazy(() => Schemas$FileLink.in),
      opts,
    });
  }
  /**
   * List all file links
   *
   * <p>Returns a list of file links.</p>
   *
   * GET /v1/file_links
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FileLinkListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/file_links",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: z
            .union([Schemas$FileLinkListCreatedObj0.out, z.number().int()])
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
          name: "expired",
          value: z.boolean().optional().parse(request.expired),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "file",
          value: z.string().optional().parse(request.file),
          style: "form",
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
      responseSchema: z.lazy(() => Schemas$FileLinkListResponse.in),
      opts,
    });
  }
}
