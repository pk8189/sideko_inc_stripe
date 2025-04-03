import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/forwarding/request/request-types";
import { Schemas$ForwardingRequest } from "@sideko-inc/stripe/types/forwarding-request";
import { Schemas$ForwardingRequestCreateBody } from "@sideko-inc/stripe/types/forwarding-request-create-body";
import { Schemas$ForwardingRequestListCreated } from "@sideko-inc/stripe/types/forwarding-request-list-created";
import { Schemas$ForwardingRequestListResponse } from "@sideko-inc/stripe/types/forwarding-request-list-response";
import * as z from "zod";

export class RequestClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a ForwardingRequest
   *
   * <p>Creates a ForwardingRequest object.</p>
   *
   * POST /v1/forwarding/requests
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ForwardingRequest> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/forwarding/requests",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$ForwardingRequestCreateBody.out.parse(request),
      responseSchema: Schemas$ForwardingRequest.in,
      opts,
    });
  }
  /**
   * Retrieve a ForwardingRequest
   *
   * <p>Retrieves a ForwardingRequest object.</p>
   *
   * GET /v1/forwarding/requests/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ForwardingRequest> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/forwarding/requests/${request.id}`,
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
      responseSchema: Schemas$ForwardingRequest.in,
      opts,
    });
  }
  /**
   * List all ForwardingRequests
   *
   * <p>Lists all ForwardingRequest objects.</p>
   *
   * GET /v1/forwarding/requests
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ForwardingRequestListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/forwarding/requests",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "created",
          value: Schemas$ForwardingRequestListCreated.out
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
      responseSchema: Schemas$ForwardingRequestListResponse.in,
      opts,
    });
  }
}
