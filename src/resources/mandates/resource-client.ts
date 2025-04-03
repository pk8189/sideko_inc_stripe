import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/mandates/request-types";
import { Schemas$Mandate } from "@sideko-inc/stripe/types/mandate";
import * as z from "zod";

export class MandatesClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Retrieve a Mandate
   *
   * <p>Retrieves a Mandate object.</p>
   *
   * GET /v1/mandates/{mandate}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.Mandate> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/mandates/${request.mandate}`,
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
      responseSchema: z.lazy(() => Schemas$Mandate.in),
      opts,
    });
  }
}
