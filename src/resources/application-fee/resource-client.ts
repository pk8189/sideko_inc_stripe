import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import { RefundClient } from "@sideko-inc/stripe/resources/application-fee/refund";
import * as requests from "@sideko-inc/stripe/resources/application-fee/request-types";
import { Schemas$ApplicationFee } from "@sideko-inc/stripe/types/application-fee";
import { Schemas$ApplicationFeeListCreatedObj0 } from "@sideko-inc/stripe/types/application-fee-list-created-obj0";
import { Schemas$ApplicationFeeListResponse } from "@sideko-inc/stripe/types/application-fee-list-response";
import * as z from "zod";

export class ApplicationFeeClient extends CoreResourceClient {
  refund: RefundClient;

  constructor(client: CoreClient) {
    super(client);

    this.refund = new RefundClient(this._client);
  }
  /**
   * Retrieve an application fee
   *
   * <p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>
   *
   * GET /v1/application_fees/{id}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ApplicationFee> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/application_fees/${request.id}`,
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
      responseSchema: z.lazy(() => Schemas$ApplicationFee.in),
      opts,
    });
  }
  /**
   * List all application fees
   *
   * <p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>
   *
   * GET /v1/application_fees
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ApplicationFeeListResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/application_fees",
      auth: ["basicAuth", "bearerAuth"],
      query: [
        encodeQueryParam({
          name: "charge",
          value: z.string().optional().parse(request.charge),
          style: "form",
          explode: true,
        }),
        encodeQueryParam({
          name: "created",
          value: z
            .union([
              Schemas$ApplicationFeeListCreatedObj0.out,
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
      ],
      contentType: "application/x-www-form-urlencoded",
      body: z.record(z.string(), z.any()).parse(request.data),
      responseSchema: z.lazy(() => Schemas$ApplicationFeeListResponse.in),
      opts,
    });
  }
}
