import { types } from "@sideko-inc/stripe";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
  encodeQueryParam,
} from "@sideko-inc/stripe/core";
import * as requests from "@sideko-inc/stripe/resources/link-account-session/request-types";
import { Schemas$FinancialConnectionsSession } from "@sideko-inc/stripe/types/financial-connections-session";
import { Schemas$LinkAccountSessionCreateBody } from "@sideko-inc/stripe/types/link-account-session-create-body";
import * as z from "zod";

export class LinkAccountSessionClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Create a Session
   *
   * <p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>
   *
   * POST /v1/link_account_sessions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsSession> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/link_account_sessions",
      auth: ["basicAuth", "bearerAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: Schemas$LinkAccountSessionCreateBody.out.parse(request),
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsSession.in),
      opts,
    });
  }
  /**
   * Retrieve a Session
   *
   * <p>Retrieves the details of a Financial Connections <code>Session</code></p>
   *
   * GET /v1/link_account_sessions/{session}
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.FinancialConnectionsSession> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/link_account_sessions/${request.session}`,
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
      responseSchema: z.lazy(() => Schemas$FinancialConnectionsSession.in),
      opts,
    });
  }
}
